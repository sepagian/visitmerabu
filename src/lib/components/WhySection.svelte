<script lang="ts">
	let { title, subtitle, titleColor, subtitleColor } = $props<{
		title: string;
		subtitle: string;
		titleColor: string;
		subtitleColor: string;
	}>();
</script>

<section class="section-base bg-merabuAmber-50 snap-start items-center">
	<div class="section-container max-w-screen w-full justify-start rounded-3xl bg-orange-100 p-8">
		<p class="paragraph-caption text-center {subtitleColor}">
			{subtitle}
		</p>
		<h1 class="heading-h1 text-center {titleColor}">
			{title}
		</h1>
	</div>
</section>
