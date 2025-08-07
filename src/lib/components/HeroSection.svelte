<script lang="ts">
	import { Button } from "bits-ui";
	import { heroData } from "$lib/data/landingData";
</script>

<section
	class="section-base h-screen snap-center items-center bg-cover bg-scroll bg-center p-4"
	style="background-image: url('{heroData.imageUrl}')">
	<div
		class="bg-overlay"
		aria-hidden="true">
	</div>
	<div class="section-container snap-center">
		<h1 class="heading-h1 {heroData.titleColor} text-center">
			{heroData.title}
		</h1>
	</div>
	<div class="section-container">
		<p class="paragraph-base text-center {heroData.subtitleColor}">
			{heroData.subtitle}
		</p>
	</div>
	{#if heroData.buttonText && heroData.buttonLink}
		<Button.Root
			href={heroData.buttonLink}
			class="btn-base bg-merabuAmber-50 text-merabuSky-800"
			>{heroData.buttonText}</Button.Root>
	{/if}
</section>
