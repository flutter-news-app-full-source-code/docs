// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Flutter News App Toolkit',
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
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Deployment Guides',
					autogenerate: { directory: 'deployment' },
				},
				{
					label: 'Web Dashboard',
					autogenerate: { directory: 'web-dashboard' },
				},
				{
					label: 'Mobile Client',
					autogenerate: { directory: 'mobile-client' },
				},
			],
		}),
	],
});
