<script lang="ts">
	import HeroSection from "$lib/components/HeroSection.svelte";
	import AboutSection from "$lib/components/AboutSection.svelte";
	import WhySection from "$lib/components/WhySection.svelte";
	import ExperienceSection from "$lib/components/ExperienceSection.svelte";
	import WheretoStaySection from "$lib/components/WheretoStaySection.svelte";
	import { scrollFade } from "$lib/animations/scrollFade";
</script>

<!-- Each section now animates individual elements inside it.
     We target children of any element marked data-fade-children,
     and any element explicitly marked with data-fade. -->
<section
	use:scrollFade={{ once: false, stagger: 0.08 }}
	data-fade-target="[data-fade-children] > *, [data-fade]">
	<HeroSection />
</section>
<section
	use:scrollFade={{ once: false, stagger: 0.08 }}
	data-fade-target="[data-fade-children] > *, [data-fade]">
	<AboutSection />
</section>
<section
	use:scrollFade={{ once: false, stagger: 0.08 }}
	data-fade-target="[data-fade-children] > *, [data-fade]">
	<WhySection />
</section>
<section
	use:scrollFade={{ once: false, stagger: 0.08 }}
	data-fade-target="[data-fade-children] > *, [data-fade]">
	<ExperienceSection />
</section>
<section
	use:scrollFade={{ once: false, stagger: 0.08 }}
	data-fade-target="[data-fade-children] > *, [data-fade]">
	<WheretoStaySection />
</section>
