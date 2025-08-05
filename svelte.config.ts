import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import UnoCSS from "@unocss/svelte-scoped/preprocess";
import type { Config } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').Config} */
const config: Config = {
	preprocess: [vitePreprocess(), UnoCSS()],
	kit: { adapter: adapter() },
};

export default config;
