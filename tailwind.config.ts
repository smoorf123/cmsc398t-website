import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Geist Medium",
					"sans-serif",
				],
				body: [
					"Articulat CF",
					"sans-serif",
				],
			},
			width: {
				18: "4.5rem",
				68: "17rem",
			},
			animation: {
				"custom-pulse":
					"pulse 4s ease-in-out infinite", // Adjust logo pulse timing here
			},
			height: {
				150: "37.5rem",
			},
		},
	},
	plugins: [],
}
export default config
