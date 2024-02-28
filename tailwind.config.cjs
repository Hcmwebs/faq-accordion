/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				mobile: "url('./src/assets/background-pattern-mobile.svg')",
				desktop: "url('./src/assets/background-pattern-desktop.svg')",
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
