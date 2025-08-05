<script lang="ts">
	import { Button } from "bits-ui";

	let { title, description, buttonText, buttonLink, bgImage } = $props<{
		title: string;
		description: string;
		buttonText: string;
		buttonLink: string;
		bgImage: string;
	}>();
</script>

<section
	class="section-base items-center bg-cover bg-center p-4"
	style="background-image: url('{bgImage}')">
	<div
		class="bg-overlay"
		aria-hidden="true">
	</div>
	<div class="section-container">
		<h1 class="heading-h1 text-merabuAmber-400 text-center">
			{title}
		</h1>
	</div>
	<div class="section-container">
		<p class="paragraph-base text-merabuAmber-300 text-center">
			{description}
		</p>
	</div>
	{#if buttonText && buttonLink}
		<Button.Root
			href={buttonLink}
			class="btn-base btn-primary z-10">{buttonText}</Button.Root>
	{/if}
</section>
