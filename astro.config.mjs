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
					label: 'Start Here',
					items: [
						{ label: 'Getting Started', link: '/getting-started' },
						{ label: 'Deployment Guides', link: '/deployment-guides' },
					],
				},
				{
					label: 'API Server',
					collapsed: true,
					items: [
						{ label: 'Introduction', link: '/api-server/' },
						{ label: 'Local Setup', link: '/api-server/local-setup' },
						{
							label: 'Features',
							collapsed: true,
							items: [
								{ label: 'Authentication', link: '/api-server/features/authentication' },
								{ label: 'Data Management', link: '/api-server/features/data-management-api' },
								{ label: 'RBAC', link: '/api-server/features/rbac' },
							],
						},
						{
							label: 'Advanced',
							collapsed: true,
							items: [
								{ label: 'Dependency Injection', link: '/api-server/advanced/dependency-injection' },
								{ label: 'Middleware', link: '/api-server/advanced/middleware' },
							],
						},
						{ label: 'Deployment', link: '/api-server/deployment' },
					],
				},
								{
					label: 'Web Dashboard',
					collapsed: true,
					items: [
						{ label: 'Introduction', link: '/web-dashboard/' },
						{ label: 'Local Setup', link: '/web-dashboard/local-setup' },
						{
							label: 'Features',
							collapsed: true,
							items: [
								{ label: 'App Configuration', link: '/web-dashboard/features/app-configuration' },
								{ label: 'Authentication', link: '/web-dashboard/features/authentication' },
								{ label: 'Content Management', link: '/web-dashboard/features/content-management' },
								{ label: 'Dashboard Overview', link: '/web-dashboard/features/dashboard-overview' },
							],
						},
						{ label: 'Deployment', link: '/web-dashboard/deployment' },
					],
				},
				{
					label: 'Mobile Client',
					collapsed: true,
					items: [
						{ label: 'Introduction', link: '/mobile-client/' },
						{ label: 'Local Setup', link: '/mobile-client/local-setup' },
						{
							label: 'Architecture',
							collapsed: true,
							items: [
								{ label: 'Routing', link: '/mobile-client/architecture/routing' },
								{ label: 'Shared Components', link: '/mobile-client/architecture/shared-components' },
							],
						},
						{
							label: 'Features',
							collapsed: true,
							items: [
								{ label: 'Account', link: '/mobile-client/features/account' },
								{ label: 'Authentication', link: '/mobile-client/features/authentication' },
								{ label: 'Entity Details', link: '/mobile-client/features/entity-details' },
								{ label: 'Headline Details', link: '/mobile-client/features/headline-details' },
								{ label: 'Headlines Feed', link: '/mobile-client/features/headlines-feed' },
								{ label: 'Search', link: '/mobile-client/features/search' },
								{ label: 'Settings', link: '/mobile-client/features/settings' },
							],
						},
						{ label: 'Deployment', link: '/mobile-client/deployment' },
					],
				},
			],
		}),
	],
});
