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
					label: 'Welcome',
					items: [
						{ label: 'Introduction', link: '/introduction' },
						{ label: 'Core Philosophy', link: '/core-philosophy' },
					],
				},
				{
					label: 'API Server',
					autogenerate: { directory: 'api-server' },
				},
				{
					label: 'Mobile Client',
					autogenerate: { directory: 'mobile-client' },
				},
				{
					label: 'Web Dashboard',
					autogenerate: { directory: 'web-dashboard' },
				},
			],
		}),
	],
});
