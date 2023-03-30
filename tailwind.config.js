/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				merriweather: ['Merriweather', 'serif'],
				libre: ['Abhaya Libre', 'serif'],
				poppins: ['Poppins', 'sans-serif']
			},
			width: {
				95: '95%'
			}
		}
	},
	plugins: []
};
