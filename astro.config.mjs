// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://flutter-news-app-full-source-code.github.io',
	base: '/docs',
	integrations: [
		starlight({
			title: 'Flutter News App Toolkit',
			logo: {
    			light: "./src/assets/flutter-news-app-toolkit-light-logo.png",
    			dark: "./src/assets/flutter-news-app-toolkit-dark-logo.png",
      		},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/flutter-news-app-full-source-code',
				},
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Local Setup', link: '/getting-started/local-setup' },
						{ label: 'Deployment', link: '/getting-started/deployment' },
					],
				},	
			],
		}),
	],
});
