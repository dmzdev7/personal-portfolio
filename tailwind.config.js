/** @type {import('tailwindcss').Config} */

// const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			padding: {
				DEFAULT: '15px',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		extend: {
			colors: {
				dark: '#1b1b1b',
				light: '#F7F4F3',
				primary: '#131424',
				secondary: '#393A47',
				redEngine: '#DB162F',
				// process: '#0CAADC',
				// poppy: '#DF2935',
				// aero: '#11B5E4',
				// ncs: '#1481BA',
			},
			fontFamily: {
				mont: [`var(--font-mont)`, 'sans-serif'],
				sora: [`var(--font-sora)`, 'sans-serif'],
			},
			backgroundImage: {
				// site: 'url("/images/svgs/site-bg.svg")',
			},
		},
	},
	plugins: [],
};
