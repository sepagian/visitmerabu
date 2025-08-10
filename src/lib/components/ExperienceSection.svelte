<script lang="ts">
	import { experienceImages } from "$lib/data/landingData";
	import ExperienceCard from "$lib/components/card/ExperienceCard.svelte";
	import { Button } from "bits-ui";
</script>

<section class="section-base bg-merabuAmber-50 h-fit items-center">
	<div class="section-container mx-auto max-w-7xl">
		<!-- Section Header -->
		<p class="paragraph-caption text-merabuForest-700 text-center">
			Ada apa di Merabu?
		</p>
		<h2 class="heading-h1 text-merabuForest-900 text-center">
			Setiap Langkah adalah Cerita, Setiap Sudut adalah Pengalaman
		</h2>

		<!-- Masonry Layout -->
		<div class="mt-12 columns-1 gap-6 [column-fill:_balance] sm:columns-3 lg:columns-3">
			{#each experienceImages as exp, i (exp.title)}
				{#if i <= 2 }
					<div class="mb-6 break-inside-avoid">
						<ExperienceCard
							title={exp.title}
							imageUrl={exp.imageUrl}/>
					</div>
				{:else}
					<div class="mb-6 break-inside-avoid mobile-invisible">
						<ExperienceCard
							title={exp.title}
							imageUrl={exp.imageUrl}/>
					</div>
				{/if}	
			{/each}
		</div>

		<!-- View More Button -->
		<Button.Root
			class="btn-base bg-merabuSky-700 text-merabuAmber-50 text-center"
			href="/experience">Lihat Selengkapnya</Button.Root>
	</div>
</section>
