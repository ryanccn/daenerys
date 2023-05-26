import type { DaenerysRule } from '.';

export const verifications = [
	{
		id: 'google-search-console',
		name: 'Google Search Console',
		txt: (txt) => txt.some((k) => k.startsWith('google-site-verification=')),
	},
	{
		id: 'keybase',
		name: 'Keybase',
		txt: (txt) => txt.some((k) => k.startsWith('keybase-site-verification=')),
	},
	{
		id: 'tutanota',
		name: 'Tutanota',
		txt: (txt) => txt.some((k) => k.startsWith('t-verify=')),
	},
	{
		id: 'zoho',
		name: 'Zoho',
		txt: (txt) => txt.some((k) => k.startsWith('zoho-verification=')),
	},
	{
		id: 'stripe',
		name: 'Stripe',
		txt: (txt) => txt.some((k) => k.startsWith('stripe-verification=')),
	},
	{
		id: 'apple',
		name: 'Apple',
		txt: (txt) => txt.some((k) => k.startsWith('apple-domain-verification=')),
	},
	{
		id: 'zoom',
		name: 'Zoom',
		txt: (txt) => txt.some((k) => k.startsWith('ZOOM_verify_')),
	},
	{
		id: 'notion',
		name: 'Notion',
		txt: (txt) =>
			txt.some(
				(k) =>
					k.toLowerCase().startsWith('notion_verify_') ||
					k.toLowerCase().startsWith('notion-domain-verification=')
			),
	},
	{
		id: 'docusign',
		name: 'Docusign',
		txt: (txt) => txt.some((k) => k.startsWith('docusign=')),
	},
	{
		id: 'loom',
		name: 'Loom',
		txt: (txt) => txt.some((k) => k.startsWith('loom-verification=')),
	},
	{
		id: 'atlassian',
		name: 'Atlassian',
		txt: (txt) => txt.some((k) => k.startsWith('atlassian-domain-verification=')),
	},
	{
		id: 'statuspage',
		name: 'StatusPage',
		txt: (txt) => txt.some((k) => k.startsWith('status-page-domain-verification=')),
	},
	{
		id: 'dropbox',
		name: 'Dropbox',
		txt: (txt) => txt.some((k) => k.startsWith('dropbox-domain-verification=')),
	},
	{
		id: 'fastly',
		name: 'Fastly',
		txt: (txt) => txt.some((k) => k.startsWith('fastly-domain-delegation-')),
	},
] satisfies DaenerysRule[];
