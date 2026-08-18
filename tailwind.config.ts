
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				/* Brand palette — exact PCD hex values anchored at 600 and 800 */
				church: {
					'50':  '#f7f2f6',
					'100': '#ecdde9',
					'200': '#d4b5ce',
					'300': '#b885aa',
					'400': '#905383',
					'500': '#6e3165',
					'600': '#5A2653', /* Primary brand purple */
					'700': '#4a1f44',
					'800': '#422F3C', /* Dark header / footer */
					'900': '#2d1429',
					'950': '#1a0a17',
				},
				/* CTA green */
				cta: {
					'DEFAULT': '#4CAF50',
					'hover':   '#43A047',
					'light':   '#E8F5E9',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 1.5s ease-out'
			},
			fontFamily: {
				'heading': ['"Century Gothic"', '"CenturyGothic"', '"Avant Garde"', 'Futura', '"Didact Gothic"', 'Muli', 'sans-serif'],
				'body': ['"Century Gothic"', '"CenturyGothic"', '"Avant Garde"', 'Futura', '"Didact Gothic"', 'Muli', 'sans-serif'],
			},
			backgroundImage: {}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
