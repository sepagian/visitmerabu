<script lang="ts">
	import { Button } from "bits-ui";

	let {
		title,
		subtitle,
		contentParagraph,
		titleColor,
		subtitleColor,
		contentColor,
		buttonText,
		buttonLink,
	} = $props<{
		title: string;
		subtitle: string;
		contentParagraph: string[];
		buttonText: string;
		buttonLink: string;
		titleColor: string;
		subtitleColor: string;
		contentColor: string;
	}>();
</script>

<section class="section-base bg-merabuAmber-50 snap-center">
	<span class="paragraph-caption {subtitleColor}">{subtitle}</span>
	<div class="section-container">
		<h1 class="heading-h1 {titleColor}">
			{title}
		</h1>
	</div>
	<div class="section-container">
		{#each contentParagraph as paragraph, i}
			{#if i === 0}
				<p class="paragraph-base {contentColor}">{paragraph}</p>
			{:else}
				<p class="paragraph-base mobile-invisible {contentColor}">{paragraph}</p>
			{/if}

			{#if i < contentParagraph.length - 1}
				{#if i === 0}
					<p class="text-prose text-base-lg {contentColor} mobile-invisible text-left">
						—
					</p>
				{:else}
					<p class="text-prose text-base-lg {contentColor} text-left">—</p>
				{/if}
			{/if}
		{/each}
	</div>
	<Button.Root
		class="btn-base bg-merabuSky-700 text-merabuAmber-50 desktop-invisible text-center"
		href={buttonLink}>{buttonText}</Button.Root>
</section>
