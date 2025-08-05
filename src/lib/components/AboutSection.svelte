<script lang="ts">
	import { Button } from "bits-ui";

	let { title, subtitle, contentParagraph, buttonText, buttonLink, bgColor } = $props<{
		title: string;
		subtitle: string;
		contentParagraph: string[];
		buttonText: string;
		buttonLink: string;
	}>();
</script>

<section class="section-base bg-merabuAmber-50">
	<span class="paragraph-caption text-merabuSky-600">{subtitle}</span>
	<div class="section-container">
		<h1 class="heading-h1 text-merabuSky-800">
			{title}
		</h1>
	</div>
	<div class="section-container">
		{#each contentParagraph as paragraph}
			<p class="paragraph-base text-merabuSky-700">
				{paragraph}
			</p>
			{#if paragraph !== contentParagraph[contentParagraph.length - 1]}
				<p class="text-prose text-base-lg text-merabuSky-700 text-left">—</p>
			{/if}
		{/each}
	</div>
	<Button.Root
		class="btn-base bg-merabuSky-700 btn-primary desktop-invisible text-center"
		href={buttonLink}>{buttonText}</Button.Root>
</section>
