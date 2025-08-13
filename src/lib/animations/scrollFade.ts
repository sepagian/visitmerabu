// Lazy-load GSAP and ScrollTrigger to avoid render-blocking the main bundle.
// This reduces initial JS payload and network dependency depth until the animation is actually used.
let registered = false;
let registering: Promise<void> | null = null;
let gsapRef: any = null;
let ScrollTriggerRef: any = null;

function ensureRegistered(): Promise<void> {
  if (registered) return Promise.resolve();
  if (registering) return registering;
  if (typeof window === "undefined") return Promise.resolve();

  registering = (async () => {
    const g = (await import("gsap")).gsap;
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    g.registerPlugin(ScrollTrigger);
    gsapRef = g;
    ScrollTriggerRef = ScrollTrigger;
    registered = true;
  })();

  return registering;
}

export type ScrollFadeOptions = {
  // Enter animation
  y?: number; // deprecated alias for yIn; kept for backward compatibility
  yIn?: number; // initial translateY for fade-in
  yOut?: number; // translateY target for fade-out
  duration?: number; // deprecated alias for durationIn
  durationIn?: number;
  durationOut?: number;
  easeIn?: string;
  easeOut?: string;
  once?: boolean; // if true, play once and don't reverse when scrolling back
  stagger?: number; // stagger between multiple targets
  start?: string; // ScrollTrigger start position, e.g. "top 85%"
  end?: string; // optional ScrollTrigger end position
  targets?: string | Element[]; // selector or explicit targets within the node to animate (instead of the node itself)
};

export function scrollFade(node: Element, options: ScrollFadeOptions = {}) {
  if (typeof window === "undefined") return {};

  const {
    y, // deprecated alias for yIn
    yIn = y ?? 30,
    yOut = -20,
    duration, // deprecated alias for durationIn
    durationIn = duration ?? 0.8,
    durationOut = 0.6,
    easeIn = "power2.out",
    easeOut = "power2.in",
    once = true,
    stagger = 0,
    start = "top 85%",
    end,
    targets: optTargets,
  } = options;

  // Resolve targets preference in the following order:
  // 1) options.targets (string selector or elements)
  // 2) data-fade-target attribute on the node (selector)
  // 3) data-fade-children attribute -> direct children
  // 4) descendants with [data-fade]
  // 5) fallback to the node itself
  let targets: Element[];

  const el = node as HTMLElement;
  const attrSelector = el.getAttribute("data-fade-target");

  if (typeof optTargets === "string") {
    targets = Array.from(el.querySelectorAll(optTargets));
  } else if (Array.isArray(optTargets)) {
    targets = optTargets;
  } else if (attrSelector) {
    targets = Array.from(el.querySelectorAll(attrSelector));
  } else if (el.hasAttribute("data-fade-children")) {
    targets = Array.from(el.children);
  } else {
    const descendants = Array.from(el.querySelectorAll("[data-fade]"));
    targets = descendants.length ? descendants : [node];
  }

  // Set initial hidden state for targets using inline styles to avoid layout thrashing.
  // We'll switch to GSAP animations once it's loaded.
  for (const t of targets) {
    const ht = t as HTMLElement;
    ht.style.willChange = "opacity, transform";
    ht.style.opacity = "0";
    ht.style.transform = `translateY(${yIn}px)`;
  }

  let currentTween: any = null;
  let st: any = null;
  let destroyed = false;

  function killCurrent() {
    if (currentTween) {
      currentTween.kill?.();
      currentTween = null;
    }
  }

  function playIn() {
    killCurrent();
    currentTween = gsapRef.to(targets as any, {
      autoAlpha: 1,
      y: 0,
      duration: durationIn,
      ease: easeIn,
      stagger,
      overwrite: true,
    });
  }

  function playOut() {
    killCurrent();
    currentTween = gsapRef.to(targets as any, {
      autoAlpha: 0,
      y: yOut,
      duration: durationOut,
      ease: easeOut,
      stagger,
      overwrite: true,
    });
  }

  // Lazily import and init ScrollTrigger when needed.
  ensureRegistered().then(() => {
    if (destroyed) return;

    // After GSAP is ready, ensure initial state is set using GSAP for consistency.
    gsapRef.set(targets as any, { autoAlpha: 0, y: yIn });

    st = ScrollTriggerRef.create({
      trigger: node,
      start,
      ...(end ? { end } : {}),
      onEnter: () => {
        playIn();
        if (once) st.disable();
      },
      onEnterBack: () => {
        playIn();
      },
      onLeaveBack: () => {
        if (!once) playOut();
      },
    });
  });

  return {
    destroy() {
      destroyed = true;
      st?.kill?.();
      killCurrent();
    },
  };
}
