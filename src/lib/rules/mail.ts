import type { DaenerysRule } from '.';

export const mail = [
	{
		id: 'g-suite',
		name: 'G Suite',
		mx: (mx) =>
			mx.filter((k) => k.name.endsWith('google.com.') || k.name.endsWith('googlemail.com.'))
				.length > 0,
	},
	{
		id: 'outlook',
		name: 'Outlook',
		mx: (mx) => mx.filter((k) => k.name.endsWith('.outlook.com.')).length > 0,
	},
	{
		id: 'tutanota',
		name: 'Tutanota',
		mx: (mx) => mx.filter((k) => k.name === 'mail.tutanota.de.').length > 0,
	},
	{
		id: 'zoho',
		name: 'Zoho',
		mx: (mx) =>
			mx.filter((k) => k.name.endsWith('zoho.com.') || k.name.endsWith('zoho.eu.')).length > 0,
	},
	{
		id: 'fastmail',
		name: 'Fastmail',
		mx: (mx) => mx.filter((k) => k.name.endsWith('messagingengine.com.')).length > 0,
	},
	{
		id: 'mailgun',
		name: 'Mailgun',
		txt: (txt) =>
			txt.filter((k) => k.startsWith('v=spf') && k.includes('include:mailgun.org')).length > 0,
	},
] satisfies DaenerysRule[];
