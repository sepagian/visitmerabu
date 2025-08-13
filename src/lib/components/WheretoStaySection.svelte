<script lang="ts">
	import { whereData } from "$lib/data/landingData";
	import BookingForm from "./form/BookingForm.svelte";
</script>

<section
	class="bg-merabuAmber-50 flex h-fit items-center justify-center p-4 sm:p-12"
	id="contact">
	<div class="bg-merabuForest-800 h-fit justify-around gap-8 rounded-2xl p-8 sm:flex sm:p-12">
		<div class="section-container max-w-md pt-8">
			<span class="paragraph-caption {whereData.subtitleColor}">{whereData.subtitle}</span>
			<div class="section-container">
				<h1 class="heading-h1 {whereData.titleColor}">
					{whereData.title}
				</h1>
			</div>
			<div class="section-container">
				{#each whereData.description as description}
					<p class="paragraph-base {whereData.descriptionColor}">{description}</p>
				{/each}
			</div>
		</div>
		<div class="section-container pt-8">
			<div class="bg-merabuForest-800">
				<BookingForm />
			</div>
		</div>
	</div>
</section>
