import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "@unocss/svelte-scoped/vite";
import transformerDirectives from "@unocss/transformer-directives";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		UnoCSS({
			cssFileTransformers: [transformerDirectives()],
		}),
		sveltekit(),
	],
});
