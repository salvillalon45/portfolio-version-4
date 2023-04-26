/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			colors: {
				white: '#fff',
				black: '#1f2028',
				grey: '#bfbfbf'
			},
			fontFamily: {
				merriweather: ['Merriweather', 'serif'],
				libre: ['Abhaya Libre', 'serif'],
				poppins: ['Poppins', 'sans-serif']
			},
			width: {
				95: '95%',
				45: '45%'
			}
		}
	},
	plugins: []
};
