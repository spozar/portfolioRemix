import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'"Inter"',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},
			fontWeight: {
				normal: '400',
				bold: '700',
			},
			boxShadow: {
				insetHover:
					'8px 8px 8px rgba(0,0,0,0.1) inset, -8px -8px 8px rgba(30, 41, 59, 0.6) inset',
			},
			keyframes: {
				blink: {
					'0%, 100%': { backgroundColor: 'transparent' },
					'50%': { backgroundColor: 'black' },
				},
			},
			animation: {
				blink: 'blink 1s step-end infinite',
				fadeInLeftToRight: 'fadeInLeftToRight 0.5s ease-in-out',
			},
		},
	},
	plugins: [],
} satisfies Config;
