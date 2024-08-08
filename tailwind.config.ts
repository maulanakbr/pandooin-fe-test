import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        body: ['var(--font-body)', ...fontFamily.sans],
        heading: ['var(--font-heading)', ...fontFamily.sans],
        accent: ['var(--font-accent)', ...fontFamily.serif],
      },
      colors: {
        default: 'hsl(var(--bg))',
        emphasis: 'hsl(var(--bg-emphasis))',
        subtle: 'hsl(var(--bg-subtle))',
        accent: 'hsl(var(--bg-accent))',
      },
      textColor: {
        default: 'hsl(var(--text))',
        emphasis: 'hsl(var(--text-emphasis))',
        subtle: 'hsl(var(--text-subtle))',
        foreground: 'hsl(var(--text-foreground))',
        accent: 'hsl(var(--text-accent))',
        muted: 'hsl(var(--text-muted))',
      },
      borderColor: {
        default: 'hsl(var(--border))',
        emphasis: 'hsl(var(--border-emphasis))',
        subtle: 'hsl(var(--border-subtle))',
        foreground: 'hsl(var(--border-foreground))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;

export default config;
