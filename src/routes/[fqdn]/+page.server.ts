import { error } from '@sveltejs/kit';
import { queryA, queryAAAA, queryCNAME, queryMX, queryTXT } from '~/lib/dns';
import { isFQDN } from '~/lib/fqdn';

export const config = {
	isr: {
		expiration: 60,
	},
};

export const load = async ({ params }) => {
	if (!isFQDN(params.fqdn)) {
		throw error(404, 'Invalid FQDN');
	}

	const [a, aaaa, cname, mx, txt] = await Promise.all([
		queryA(params.fqdn),
		queryAAAA(params.fqdn),
		queryCNAME(params.fqdn),
		queryMX(params.fqdn),
		queryTXT(params.fqdn),
	]);

	const mailResults = {
		gSuite:
			!!mx &&
			mx.filter((k) => k.name.endsWith('google.com.') || k.name.endsWith('googlemail.com.'))
				.length > 0,
		outlook: !!mx && mx.filter((k) => k.name.endsWith('.outlook.com.')).length > 0,
		tutanota: !!mx && mx.filter((k) => k.name === 'mail.tutanota.de.').length > 0,
		zoho:
			!!mx &&
			mx.filter((k) => k.name.endsWith('zoho.com.') || k.name.endsWith('zoho.eu.')).length > 0,
		fastmail: !!mx && mx.filter((k) => k.name.endsWith('messagingengine.com.')).length > 0,
		mailgun:
			!!txt &&
			txt.filter((k) => k.startsWith('v=spf') && k.includes('include:mailgun.org')).length > 0,
	};

	const verificationResults = {
		googleSearchConsole:
			!!txt && txt.filter((k) => k.startsWith('google-site-verification=')).length > 0,
		keybase: !!txt && txt.filter((k) => k.startsWith('keybase-site-verification=')).length > 0,
		tutanota: !!txt && txt.filter((k) => k.startsWith('t-verify=')).length > 0,
		zoho: !!txt && txt.filter((k) => k.startsWith('zoho-verification=')).length > 0,
		stripe: !!txt && txt.filter((k) => k.startsWith('stripe-verification=')).length > 0,
		apple: !!txt && txt.filter((k) => k.startsWith('apple-domain-verification=')).length > 0,
		zoom: !!txt && txt.filter((k) => k.startsWith('ZOOM_verify_')).length > 0,
		notion: !!txt && txt.filter((k) => k.startsWith('Notion_verify_')).length > 0,
		docusign: !!txt && txt.filter((k) => k.startsWith('docusign=')).length > 0,
	};

	return {
		fqdn: params.fqdn,
		records: { a, aaaa, cname, mx, txt },
		mailResults,
		verificationResults,
	};
};
