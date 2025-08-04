<script lang="ts">
	import { NavigationMenu } from "bits-ui";
</script>

<NavigationMenu.Root class="hidden sm:flex">
	<NavigationMenu.List class="font-inter flex items-center gap-12 text-sky-800">
		<NavigationMenu.Item>
			<NavigationMenu.Link
				href="/tentang-kami"
				class="text-lg hover:text-sky-950">
				Tentang Kami
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link
				href="/fasilitas"
				class="text-lg hover:text-sky-950">
				Fasilitas
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link
				href="/galeri"
				class="text-lg hover:text-sky-950">
				Galeri
			</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
