import type { DaenerysRule } from '.';

export const mail = [
	{
		id: 'g-suite',
		name: 'G Suite',
		mx: (mx) =>
			mx.some((k) => k.name.endsWith('google.com.') || k.name.endsWith('googlemail.com.')),
	},
	{
		id: 'outlook',
		name: 'Outlook',
		mx: (mx) => mx.some((k) => k.name.endsWith('.outlook.com.')),
	},
	{
		id: 'tutanota',
		name: 'Tutanota',
		mx: (mx) => mx.some((k) => k.name === 'mail.tutanota.de.'),
		txt: (txt) => txt.some((k) => k.startsWith('v=spf') && k.includes('include:spf.tutanota.de')),
	},
	{
		id: 'zoho',
		name: 'Zoho',
		mx: (mx) => mx.some((k) => k.name.endsWith('zoho.com.') || k.name.endsWith('zoho.eu.')),
	},
	{
		id: 'fastmail',
		name: 'Fastmail',
		mx: (mx) => mx.some((k) => k.name.endsWith('messagingengine.com.')),
		txt: (txt) =>
			txt.some((k) => k.startsWith('v=spf') && k.includes('include:spf.messagingengine.com')),
	},
	{
		id: 'hey',
		name: 'HEY',
		mx: (mx) => mx.some((k) => k.name.endsWith('hey.com.')),
		txt: (txt) => txt.some((k) => k.startsWith('v=spf') && k.includes('include:_spf.hey.com')),
	},
	{
		id: 'mailgun',
		name: 'Mailgun',
		txt: (txt) => txt.some((k) => k.startsWith('v=spf') && k.includes('include:mailgun.org')),
	},
	{
		id: 'amazon-ses',
		name: 'Amazon SES',
		txt: (txt) => txt.some((k) => k.startsWith('v=spf') && k.includes('include:amazonses.com')),
	},
	{
		id: 'sendgrid',
		name: 'SendGrid',
		txt: (txt) => txt.some((k) => k.startsWith('v=spf') && k.includes('include:sendgrid.net')),
	},
	{
		id: 'mandrill',
		name: 'Mandrill',
		txt: (txt) =>
			txt.some((k) => k.startsWith('v=spf') && k.includes('include:spf.mandrillapp.com')),
	},
	{
		id: 'salesforce',
		name: 'Salesforce',
		txt: (txt) =>
			txt.some((k) => k.startsWith('v=spf') && k.includes('include:_spf.salesforce.com')),
	},
	{
		id: 'digitalocean',
		name: 'DigitalOcean',
		txt: (txt) =>
			txt.some((k) => k.startsWith('v=spf') && k.includes('include:spf.digitalocean.com')),
	},
	{
		id: 'greenhouse',
		name: 'Greenhouse',
		txt: (txt) =>
			txt.some((k) => k.startsWith('v=spf') && k.includes('include:mg-spf.greenhouse.io')),
	},
	{
		id: 'helpscout',
		name: 'Helpscout',
		txt: (txt) =>
			txt.some((k) => k.startsWith('v=spf') && k.includes('include:helpscoutemail.com')),
	},
	{
		id: 'zendesk',
		name: 'Zendesk',
		txt: (txt) => txt.some((k) => k.startsWith('v=spf') && k.includes('include:mail.zendesk.com')),
	},
	{
		id: 'migadu',
		name: 'Migadu',
		mx: (mx) => mx.some((k) => k.name.includes('migadu.com.')),
		txt: (txt) => txt.some((k) => k.startsWith('v=spf') && k.includes('include:spf.migadu.com')),
	},
] satisfies DaenerysRule[];
