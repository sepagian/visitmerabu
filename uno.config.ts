import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetWebFonts,
	presetWind4,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	shortcuts: [
		// ...
	],
	theme: {
		colors: {
			// ...
		},
	},
	presets: [
		presetWind4({
			preflights: {
				theme: true,
			},
		}),
		presetAttributify(),
		presetIcons(),
		presetTypography(),
		presetWebFonts({
			provider: "google",
			fonts: {
				noto: [
					{
						name: "Noto Sans",
						weights: ["400", "700"],
					},
				],
				sans: [
					{
						name: "Rethink Sans",
						weights: ["400", "700"],
					},
				],
				serif: [
					{
						name: "Instrument Serif",
						weights: ["400"],
					},
				],
			},
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
