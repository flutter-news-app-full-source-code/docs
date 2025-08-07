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
						{ label: 'Overview', link: '/getting-started/' },
						{ label: 'Core Philosophy', link: '/getting-started/core-philosophy' },
						{ label: 'Toolkit Architecture', link: '/getting-started/toolkit-architecture' },
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
						{
							label: 'Features',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/api-server/features/' },
								{ label: 'Authentication', link: '/api-server/features/authentication' },
								{ label: 'User Data Sync', link: '/api-server/features/user-data-sync' },
								{ label: 'Email Service', link: '/api-server/features/email-service' },
								{ label: 'Data Management', link: '/api-server/features/data-management-api' },
								{ label: 'RBAC', link: '/api-server/features/rbac' },
								{ label: 'Rate Limiting', link: '/api-server/features/rate-limiting' },
							],
						},
						{
							label: 'Guides',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/api-server/guides/' },
								{ label: 'Configure Environment Variables', link: '/api-server/guides/configure-environment-variables' },
								{ label: 'Configure MongoDB', link: '/api-server/guides/configure-mongodb' },
								{ label: 'Configure CORS', link: '/api-server/guides/configure-cors' },
								{ label: 'Implement an Alternative Email Client', link: '/api-server/guides/implement-alternative-email-client' },
							],
						},
						{
							label: 'Architecture',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/api-server/architecture/' },
								{ label: 'Dependency Injection', link: '/api-server/architecture/dependency-injection' },
								{ label: 'Middleware', link: '/api-server/architecture/middleware' },
								{ label: 'Data Seeding & Fixtures', link: '/api-server/architecture/data-seeding-and-fixtures' },
								{ label: 'Generic Data Endpoint', link: '/api-server/architecture/generic-data-endpoint' },
								{ label: 'Error Handling', link: '/api-server/architecture/error-handling' },
							],
						},
						{
							label: 'Reference',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/api-server/reference/' },
								{ label: 'Authentication', link: '/api-server/reference/authentication' },
								{ label: 'Data Access', link: '/api-server/reference/data-access' },
								{ label: 'Core Data Models', link: '/api-server/reference/core-models' },
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
								{ label: 'Dashboard Overview', link: '/web-dashboard/features/dashboard-overview' },
								{ label: 'Content Management', link: '/web-dashboard/features/content-management' },
								{ label: 'App Configuration', link: '/web-dashboard/features/app-configuration' },
								{ label: 'Authentication', link: '/web-dashboard/features/authentication' },
							],
						},
						{
							label: 'Architecture',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/web-dashboard/architecture/' },
								{ label: 'State Management (BLoC)', link: '/web-dashboard/architecture/state-management' },
								{ label: 'Routing (go_router)', link: '/web-dashboard/architecture/routing' },
								{ label: 'Data Loading Strategy', link: '/web-dashboard/architecture/data-loading-strategy' },
							],
						},
						{
							label: 'Guides',
							collapsed: true,
							items: [
								{ label: 'Styling & Theming', link: '/web-dashboard/guides/styling-and-theming' },
								{ label: 'Localization', link: '/web-dashboard/guides/localization' },
							],
						},
						{
							label: 'Manuals',
							collapsed: true,
							items: [
								{ label: 'Managing Content', link: '/web-dashboard/manuals/managing-content' },
								{ label: 'Configuring the Mobile App', link: '/web-dashboard/manuals/configuring-the-app' },
								{ label: 'Managing Your Admin Account', link: '/web-dashboard/manuals/managing-admin-account' },
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
								{ label: 'Overview', link: '/mobile-client/architecture/' },
								{ label: 'State Management (BLoC)', link: '/mobile-client/architecture/state-management' },
								{ label: 'Routing & Navigation', link: '/mobile-client/architecture/routing' },
								{ label: 'Error Handling', link: '/mobile-client/architecture/error-handling' },
								{ label: 'Shared Components', link: '/mobile-client/architecture/shared-components' },
							],
						},
						{
							label: 'Guides',
							collapsed: true,
							items: [
								{ label: 'Styling & Theming', link: '/mobile-client/guides/styling-and-theming' },
								{ label: 'Localization', link: '/mobile-client/guides/localization' },
							],
						},
						{
							label: 'Features',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/mobile-client/features/' },
								{ label: 'Account', link: '/mobile-client/features/account' },
								{ label: 'Authentication', link: '/mobile-client/features/authentication' },
								{ label: 'Entity Details', link: '/mobile-client/features/entity-details' },
								{ label: 'Headline Details', link: '/mobile-client/features/headline-details' },
								{ label: 'Headlines Feed', link: '/mobile-client/features/headlines-feed' },
								{ label: 'Search', link: '/mobile-client/features/search' },
								{ label: 'Settings', link: '/mobile-client/features/settings' },
								{ label: 'Status Pages', link: '/mobile-client/features/status-pages' },
							],
						},
						{ label: 'Deployment', link: '/mobile-client/deployment' },
					],
				},
				{
					label: 'Customization Guides',
					collapsed: true,
					items: [
						{ label: 'Overview', link: '/customization/' },
						{
							label: 'Hosting Packages for Customization',
							link: '/customization/hosting-packages-for-customization',
						},
						{
							label: 'Guide: Customizing the UI Theme',
							link: '/customization/guide-customizing-the-ui',
						},
					],
				},
			],
		}),
	],
});
