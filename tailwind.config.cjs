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
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: 'hsl(281, 83%, 54%)',
					secondary: 'hsl(292, 42%, 14%)',
					neutral: 'hsl(292, 16%, 49%)',
					'base-100': 'hsl(275,100%, 97%)',
					white: 'hsl(0, 0%, 100%)',
					black: 'hsl(292, 42%, 14%)',
				},
			},
			'fantasy',
			'halloween',
		],
	},
};
