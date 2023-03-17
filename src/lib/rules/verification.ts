import type { DaenerysRule } from '.';

export const verifications = [
	{
		id: 'google-search-console',
		name: 'Google Search Console',
		txt: (txt) => txt.filter((k) => k.startsWith('google-site-verification=')).length > 0,
	},
	{
		id: 'keybase',
		name: 'Keybase',
		txt: (txt) => txt.filter((k) => k.startsWith('keybase-site-verification=')).length > 0,
	},
	{
		id: 'tutanota',
		name: 'Tutanota',
		txt: (txt) => txt.filter((k) => k.startsWith('t-verify=')).length > 0,
	},
	{
		id: 'zoho',
		name: 'Zoho',
		txt: (txt) => txt.filter((k) => k.startsWith('zoho-verification=')).length > 0,
	},
	{
		id: 'stripe',
		name: 'Stripe',
		txt: (txt) => txt.filter((k) => k.startsWith('stripe-verification=')).length > 0,
	},
	{
		id: 'apple',
		name: 'Apple',
		txt: (txt) => txt.filter((k) => k.startsWith('apple-domain-verification=')).length > 0,
	},
	{
		id: 'zoom',
		name: 'Zoom',
		txt: (txt) => txt.filter((k) => k.startsWith('ZOOM_verify_')).length > 0,
	},
	{
		id: 'notion',
		name: 'Notion',
		txt: (txt) =>
			txt.filter(
				(k) =>
					k.toLowerCase().startsWith('notion_verify_') ||
					k.toLowerCase().startsWith('notion-domain-verification=')
			).length > 0,
	},
	{
		id: 'docusign',
		name: 'Docusign',
		txt: (txt) => txt.filter((k) => k.startsWith('docusign=')).length > 0,
	},
	{
		id: 'loom',
		name: 'Loom',
		txt: (txt) => txt.filter((k) => k.startsWith('loom-verification=')).length > 0,
	},
	{
		id: 'atlassian',
		name: 'Atlassian',
		txt: (txt) => txt.filter((k) => k.startsWith('atlassian-domain-verification=')).length > 0,
	},
	{
		id: 'statuspage',
		name: 'StatusPage',
		txt: (txt) => txt.filter((k) => k.startsWith('status-page-domain-verification=')).length > 0,
	},
	{
		id: 'dropbox',
		name: 'Dropbox',
		txt: (txt) => txt.filter((k) => k.startsWith('dropbox-domain-verification=')).length > 0,
	},
	{
		id: 'fastly',
		name: 'Fastly',
		txt: (txt) => txt.filter((k) => k.startsWith('fastly-domain-delegation-')).length > 0,
	},
] satisfies DaenerysRule[];
