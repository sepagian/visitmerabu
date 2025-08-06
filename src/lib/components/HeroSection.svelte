<script lang="ts">
	import { Button } from "bits-ui";

	let { title, description, titleColor, descriptionColor, buttonText, buttonLink, bgImage } =
		$props<{
			title: string;
			description: string;
			titleColor: string;
			descriptionColor: string;
			buttonText: string;
			buttonLink: string;
			bgImage: string;
		}>();
</script>

<section
	class="section-base snap-center items-center bg-cover bg-center p-4"
	style="background-image: url('{bgImage}')">
	<div
		class="bg-overlay"
		aria-hidden="true">
	</div>
	<div class="section-container snap-center">
		<h1 class="heading-h1 {titleColor} text-center">
			{title}
		</h1>
	</div>
	<div class="section-container">
		<p class="paragraph-base text-center {descriptionColor}">
			{description}
		</p>
	</div>
	{#if buttonText && buttonLink}
		<Button.Root
			href={buttonLink}
			class="btn-base bg-merabuAmber-50 text-merabuSky-800">{buttonText}</Button.Root>
	{/if}
</section>
