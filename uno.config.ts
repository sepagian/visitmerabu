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
	shortcuts: {
		// GLOBAL & LAYOUT
		"layout-base": "font-sans text-brandDark min-h-screen flex flex-col",
		"section-base": "relative flex flex-col gap-4 justify-center p-4 sm:px-12",
		"bg-overlay": "absolute inset-0 z-0 bg-black opacity-60",
		"section-container": "flex flex-col z-10 max-w-2xl gap-2",
		"section-divider": "prose font-noto",
		"mobile-invisible": "hidden sm:block",
		"desktop-invisible": "block sm:hidden",

		// BUTTONS
		"btn-base": "px-6 py-3 z-10 rounded-xl cursor-pointer",

		// TEXT & TYPOGRAPHY
		"text-base": "max-w-none text-base",
		"heading-h1": "font-bold font-sans text-wrap text-2xl sm:text-4xl",
		"heading-h2": "font-bold font-sans text-wrap text-xl sm:text-2xl",
		"paragraph-base": "font-noto text-wrap text-base",
		"paragraph-lg": "font-noto text-wrap text-base sm:text-2xl",
		"paragraph-caption": "font-noto text-wrap text-sm font-bold",
	},
	theme: {
		colors: {
			brandPrimary: "oklch(39.8% 0.195 277.366)",
			brandSecondary: "oklch(79.5% 0.184 86.047)",
			brandDark: "oklch(14.5% 0 0)",
			brandLight: "oklch(98.5% 0 0)",

			merabuForest: {
				500: "oklch(72.3% 0.219 149.579)",
				600: "oklch(62.7% 0.194 149.214)",
				700: "oklch(52.7% 0.154 150.069)",
				800: "oklch(44.8% 0.119 151.328)",
				900: "oklch(39.3% 0.095 152.535)",
				950: "oklch(26.6% 0.065 152.934)",
			},
			merabuAmber: {
				50: "oklch(98.7% 0.022 95.277)",
				100: "oklch(96.2% 0.059 95.617)",
				200: "oklch(92.4% 0.12 95.746)",
				300: "oklch(87.9% 0.169 91.605)",
				400: "oklch(82.8% 0.189 84.429)",
				500: "oklch(76.9% 0.188 70.08)",
			},
			merabuSky: {
				500: "oklch(68.5% 0.169 237.323)",
				600: "oklch(58.8% 0.158 241.966)",
				700: "oklch(50% 0.134 242.749)",
				800: "oklch(44.3% 0.11 240.79)",
				900: "oklch(39.1% 0.09 240.876)",
				950: "oklch(29.3% 0.066 243.157)",
			},
			merabuIndigo: {
				700: "oklch(45.7% 0.24 277.023)",
				800: "oklch(39.8% 0.195 277.366)",
				900: "oklch(35.9% 0.144 278.697)",
			},
		},
		fontFamily: {
			sans: "Rethink Sans, sans-serif",
			noto: "Noto Sans, sans-serif",
			serif: "Instrument Serif, serif",
		},
	},
	safelist: [
		"text-brandDark",
		"text-brandLight",
		"text-merabuAmber-50",
		"text-merabuAmber-100",
		"text-merabuAmber-200",
		"text-merabuAmber-300",
		"text-merabuAmber-400",
		"text-merabuAmber-500",
		"text-merabuSky-500",
		"text-merabuSky-600",
		"text-merabuSky-700",
		"text-merabuSky-800",
		"text-merabuSky-900",
		"text-merabuSky-950",
		"text-merabuForest-500",
		"text-merabuForest-600",
		"text-merabuForest-700",
		"text-merabuForest-800",
		"text-merabuForest-900",
		"text-merabuForest-950",
		"text-merabuIndigo-700",
		"text-merabuIndigo-800",
		"text-merabuIndigo-900",
	],
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
