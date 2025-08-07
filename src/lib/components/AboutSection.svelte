<script lang="ts">
	import { Button } from "bits-ui";
	import { aboutData } from "$lib/data/landingData";
</script>

<section class="section-base bg-merabuAmber-50 h-screen snap-center">
	<span class="paragraph-caption {aboutData.subtitleColor}">{aboutData.subtitle}</span>
	<div class="section-container">
		<h1 class="heading-h1 {aboutData.titleColor}">
			{aboutData.title}
		</h1>
	</div>
	<div class="section-container">
		{#each aboutData.contentParagraph as paragraph, i}
			{#if i === 0}
				<p class="paragraph-base {aboutData.contentColor}">{paragraph}</p>
			{:else}
				<p class="paragraph-base mobile-invisible {aboutData.contentColor}">{paragraph}</p>
			{/if}

			{#if i < aboutData.contentParagraph.length - 1}
				{#if i === 0}
					<p
						class="text-prose text-base-lg {aboutData.contentColor} mobile-invisible text-left">
						—
					</p>
				{:else}
					<p class="text-prose text-base-lg {aboutData.contentColor} text-left">—</p>
				{/if}
			{/if}
		{/each}
	</div>
	<Button.Root
		class="btn-base bg-merabuSky-700 text-merabuAmber-50 desktop-invisible text-center"
		href={aboutData.buttonLink}>{aboutData.buttonText}</Button.Root>
</section>
