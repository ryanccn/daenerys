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
		txt: (txt) =>
			txt.filter((k) => k.startsWith('v=spf') && k.includes('include:spf.tutanota.de')).length > 0,
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
		txt: (txt) =>
			txt.filter((k) => k.startsWith('v=spf') && k.includes('include:spf.messagingengine.com'))
				.length > 0,
	},
	{
		id: 'hey',
		name: 'HEY',
		mx: (mx) => mx.filter((k) => k.name.endsWith('hey.com.')).length > 0,
		txt: (txt) =>
			txt.filter((k) => k.startsWith('v=spf') && k.includes('include:_spf.hey.com')).length > 0,
	},
	{
		id: 'mailgun',
		name: 'Mailgun',
		txt: (txt) =>
			txt.filter((k) => k.startsWith('v=spf') && k.includes('include:mailgun.org')).length > 0,
	},
	{
		id: 'amazon-ses',
		name: 'Amazon SES',
		txt: (txt) =>
			txt.filter((k) => k.startsWith('v=spf') && k.includes('include:amazonses.com')).length > 0,
	},
	{
		id: 'sendgrid',
		name: 'SendGrid',
		txt: (txt) =>
			txt.filter((k) => k.startsWith('v=spf') && k.includes('include:sendgrid.net')).length > 0,
	},
	{
		id: 'mandrill',
		name: 'Mandrill',
		txt: (txt) =>
			txt.filter((k) => k.startsWith('v=spf') && k.includes('include:spf.mandrillapp.com')).length >
			0,
	},
	{
		id: 'salesforce',
		name: 'Salesforce',
		txt: (txt) =>
			txt.filter((k) => k.startsWith('v=spf') && k.includes('include:_spf.salesforce.com')).length >
			0,
	},
	{
		id: 'digitalocean',
		name: 'Digitalocean',
		txt: (txt) =>
			txt.filter((k) => k.startsWith('v=spf') && k.includes('include:spf.digitalocean.com'))
				.length > 0,
	},
	{
		id: 'greenhouse',
		name: 'Greenhouse',
		txt: (txt) =>
			txt.filter((k) => k.startsWith('v=spf') && k.includes('include:mg-spf.greenhouse.io'))
				.length > 0,
	},
	{
		id: 'helpscout',
		name: 'Helpscout',
		txt: (txt) =>
			txt.filter((k) => k.startsWith('v=spf') && k.includes('include:helpscoutemail.com')).length >
			0,
	},
	{
		id: 'zendesk',
		name: 'Zendesk',
		txt: (txt) =>
			txt.filter((k) => k.startsWith('v=spf') && k.includes('include:mail.zendesk.com')).length > 0,
	},
] satisfies DaenerysRule[];
