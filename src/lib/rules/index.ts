import { z } from 'zod';
import type { DNSQueryResponse } from '../dns';

const DaenerysMXCondition = z.object({ name: z.string(), priority: z.number() });

export const DaenerysRule = z.object({
	id: z.string().describe('A unique identifier'),
	name: z.string().describe('Readable name displayed on the web app'),
	txt: z.function().args(z.string().array()).returns(z.boolean()).optional(),
	mx: z.function().args(DaenerysMXCondition.array()).returns(z.boolean()).optional(),
	a: z.function().args(z.string().array()).returns(z.boolean()).optional(),
	aaaa: z.function().args(z.string().array()).returns(z.boolean()).optional(),
});

export type DaenerysRule = z.infer<typeof DaenerysRule>;

export const matchDaenerysRule = (dnsInfo: DNSQueryResponse, rule: DaenerysRule) => {
	return (
		(dnsInfo.a && typeof rule.a !== 'undefined' && rule.a(dnsInfo.a)) ||
		(dnsInfo.aaaa && typeof rule.aaaa !== 'undefined' && rule.aaaa(dnsInfo.aaaa)) ||
		(dnsInfo.mx && typeof rule.mx !== 'undefined' && rule.mx(dnsInfo.mx)) ||
		(dnsInfo.txt && typeof rule.txt !== 'undefined' && rule.txt(dnsInfo.txt)) ||
		false
	);
};
