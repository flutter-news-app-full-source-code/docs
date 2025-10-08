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
				{
					label: 'API Server',
					collapsed: true,
					items: [
						{ label: 'Introduction', link: '/api-server/' },
						{ label: 'Local Setup', link: '/api-server/local-setup' },
						{ label: 'Deployment', link: '/api-server/deployment' },
					],
				},
				{
					label: 'Web Dashboard',
					collapsed: true,
					items: [
						{ label: 'Introduction', link: '/web-dashboard/' },
						{ label: 'Local Setup', link: '/web-dashboard/local-setup' },
						{ label: 'Deployment', link: '/web-dashboard/deployment' },
					],
				},
				{
					label: 'Mobile Client',
					collapsed: true,
					items: [
						{ label: 'Introduction', link: '/mobile-client/' },
						{ label: 'Local Setup', link: '/mobile-client/local-setup' },
						{ label: 'Deployment', link: '/mobile-client/deployment' },
					],
				},
			],
		}),
	],
});
