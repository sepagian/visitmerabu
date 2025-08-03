<script lang="ts">
	import { NavigationMenu } from "bits-ui";
</script>

<NavigationMenu.Root class="hidden sm:flex">
	<NavigationMenu.List class="font-inter flex items-center gap-12 text-indigo-800">
		<NavigationMenu.Item>
			<NavigationMenu.Link
				href="/tentang-kami"
				class="text-lg hover:text-indigo-900">
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
