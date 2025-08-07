<script lang="ts">
	import { whyData } from "$lib/data/landingData";
	import FeatureCard from "./card/FeatureCard.svelte";
</script>

<section class="section-base bg-merabuAmber-50 h-fit snap-start items-center sm:h-screen">
	<div class="section-container max-w-screen w-full justify-start rounded-3xl bg-orange-100 p-4">
		<p class="paragraph-caption text-center {whyData.subtitleColor}">
			{whyData.subtitle}
		</p>
		<h1 class="heading-h1 text-center {whyData.titleColor}">
			{whyData.title}
		</h1>
		<div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each whyData.cards as item (item.title)}
				<FeatureCard data={item} />
			{/each}
		</div>
	</div>
</section>
