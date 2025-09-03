
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
				church: {
					'50': '#f7f3ff',
					'100': '#ede4ff',
					'200': '#ddd0ff',
					'300': '#c4afff',
					'400': '#a981ff',
					'500': '#8f51ff',
					'600': '#7c2fff',
					'700': '#6b1eeb',
					'800': '#5a1ab3',
					'900': '#4c1a93',
					'950': '#2e0c63',
				},
				warmGray: {
					'50': '#f9f7f5',
					'100': '#f0ebe4',
					'200': '#ded2c6',
					'300': '#cbb6a3',
					'400': '#b4957d',
					'500': '#a17d63',
					'600': '#8c6751',
					'700': '#745344',
					'800': '#60453b',
					'900': '#513b34',
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
				'serif': ['Georgia', 'Cambria', 'serif'],
				'script': ['Playfair Display', 'Georgia', 'serif'],
			},
			backgroundImage: {
				'church-pattern': "url('https://images.unsplash.com/photo-1488409688217-e6053b1e8f42?q=80&w=2942&auto=format&fit=crop')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
