<script lang="ts">
	import type { CardData, FeatureCardData, ImageCardData } from "$lib/data/landingData";

	export let data: CardData;
</script>

<div>
	{#if data.type === "feature"}
		{@const feature = data as FeatureCardData}
		<div class="bg-merabuAmber-50 flex h-full flex-col rounded-2xl p-8">
			<h3 class="text-merabuSky-800 text-xl font-bold">{feature.title}</h3>
			<p class="text-merabuSky-700 mt-2 leading-relaxed">{feature.description}</p>
		</div>
	{:else if data.type === "image"}
		{@const image = data as ImageCardData}
		<div class="relative h-full overflow-hidden rounded-2xl">
			<img
				src={image.imageUrl}
				alt={image.title}
				class="absolute inset-0 h-full w-full object-cover" />
			<div
				class="bg-overlay"
				aria-hidden="true">
			</div>
			<div class="relative flex h-full flex-col justify-between p-8 text-white">
				<h3 class="text-3xl font-bold">{image.title}</h3>
				<a
					href={image.buttonLink}
					class="mt-4 inline-block self-start rounded-lg bg-green-700 px-6 py-3 font-semibold transition hover:bg-green-800">
					{image.buttonText}
				</a>
			</div>
		</div>
	{/if}
</div>
