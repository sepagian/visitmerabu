<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import DesktopNav from "$lib/components/DesktopNav.svelte";
	import MobileNav from "$lib/components/MobileNav.svelte";
	import HamburgerButton from "$lib/components/HamburgerButton.svelte";
	import { Button } from "bits-ui";
	import { fly } from "svelte/transition";
	let { children } = $props();
	let isOpen = $state(false);
	function toggle() {
		isOpen = !isOpen;
	}
</script>

<svelte:head>
	<link
		rel="icon"
		href={favicon} />
</svelte:head>

<header class="z-90 fixed top-4 w-full flex-col justify-between px-4 sm:flex sm:px-8">
	<div class="flex gap-4">
		<div
			class="flex w-full items-center justify-between rounded-xl bg-white px-4 py-4 sm:px-6 sm:py-4">
			<div class="text-lg font-semibold text-sky-800">VisitMerabu.org</div>
			<DesktopNav />
			<HamburgerButton
				{isOpen}
				{toggle} />
		</div>
		<div class="flex">
			<Button.Root
				class="inline-flex w-auto items-center justify-center text-nowrap rounded-xl bg-sky-800 px-4 text-white hover:bg-sky-950"
				href="/contact">Hubungi Kami</Button.Root>
		</div>
	</div>
	<div class="w-full flex-col gap-4 sm:flex">
		{#if isOpen}
			<div
				class="flex transition-transform duration-200 sm:hidden"
				in:fly={{ duration: 200 }}
				out:fly={{ duration: 250 }}>
				<MobileNav {isOpen} />
			</div>
		{/if}
	</div>
</header>

<main class="relative flex-1">
	{@render children?.()}
</main>
