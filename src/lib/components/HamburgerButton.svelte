<script lang="ts">
	let { isOpen, toggle }: { isOpen: boolean; toggle: () => void } = $props();
</script>

<button
	onclick={toggle}
	class="inline-flex items-center justify-center text-indigo-800 sm:hidden"
	aria-label="Toggle Menu">
	<svg
		class="h-6 w-6"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
	</svg>
</button>
