<script lang="ts">
	export const {
		title,
		imageUrl,
	}: {
		title: string;
		imageUrl: string;
	} = $props();
</script>

<div class="overflow-hidden rounded-2xl shadow-sm ">
	<img
		src={imageUrl}
		alt={title}
		class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
		loading="lazy"
		decoding="async"
		fetchpriority="low"
	/>
</div>
