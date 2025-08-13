import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
function ensureRegistered() {
  if (registered) return;
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
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
  ensureRegistered();
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

  // Set initial hidden state for targets so they can fade in
  gsap.set(targets as gsap.TweenTarget, { autoAlpha: 0, y: yIn });

  let currentTween: gsap.core.Tween | null = null;

  function killCurrent() {
    if (currentTween) {
      currentTween.kill();
      currentTween = null;
    }
  }

  function playIn() {
    killCurrent();
    currentTween = gsap.to(targets as gsap.TweenTarget, {
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
    currentTween = gsap.to(targets as gsap.TweenTarget, {
      autoAlpha: 0,
      y: yOut,
      duration: durationOut,
      ease: easeOut,
      stagger,
      overwrite: true,
    });
  }

  const st = ScrollTrigger.create({
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
    // Intentionally do nothing onLeave (scrolling down past the section) so elements remain visible
  });

  return {
    destroy() {
      st.kill();
      killCurrent();
    },
  };
}
