import { error } from '@sveltejs/kit';

import { query } from '~/lib/dns';
import { isFQDN } from '~/lib/fqdn';

import { matchDaenerysRule } from '~/lib/rules';
import { mail } from '~/lib/rules/mail';
import { verifications } from '~/lib/rules/verification';

export const config = {
	isr: {
		expiration: 60,
	},
};

export const load = async ({ params }) => {
	if (!isFQDN(params.fqdn)) {
		throw error(404, 'Invalid FQDN');
	}

	const dnsQueryResponse = await query(params.fqdn);

	const mailResults = mail
		.filter((k) => matchDaenerysRule(dnsQueryResponse, k))
		.map((k) => ({ id: k.id, name: k.name }));
	const verificationResults = verifications
		.filter((k) => matchDaenerysRule(dnsQueryResponse, k))
		.map((k) => ({ id: k.id, name: k.name }));

	const data = {
		fqdn: params.fqdn,
		records: dnsQueryResponse,
		mailResults,
		verificationResults,
	};

	return data;
};
