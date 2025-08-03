<script lang="ts">
	import { NavigationMenu } from "bits-ui";
	let { isOpen }: { isOpen: boolean } = $props();
</script>

<!-- conditional vertical menu -->
{#if isOpen}
	<NavigationMenu.Root
		class="mt-4 w-full rounded-2xl bg-white px-6 py-4 sm:hidden"
		orientation="vertical">
		<NavigationMenu.List class="flex flex-col gap-4 text-indigo-800">
			<NavigationMenu.Item>
				<NavigationMenu.Link
					href="/tentang-kami"
					class="text-lg">
					Tentang Kami
				</NavigationMenu.Link>
			</NavigationMenu.Item>
			<NavigationMenu.Item>
				<NavigationMenu.Link
					href="/fasilitas"
					class="text-lg">
					Fasilitas
				</NavigationMenu.Link>
			</NavigationMenu.Item>
			<NavigationMenu.Item>
				<NavigationMenu.Link
					href="/galeri"
					class="text-lg">
					Galeri
				</NavigationMenu.Link>
			</NavigationMenu.Item>
		</NavigationMenu.List>
	</NavigationMenu.Root>
{/if}
