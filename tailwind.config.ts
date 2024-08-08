import type { Config } from 'tailwindcss';

export default (<Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--ui-background) / <alpha-value>)',
        foreground: 'rgb(var(--ui-foreground) / <alpha-value>)',
      },
    },
  },
});
