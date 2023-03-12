const DOH_ENDPOINT = 'https://cloudflare-dns.com/dns-query';

export const enum DNSRecordType {
	A = 1,
	NS = 2,
	CNAME = 5,
	SOA = 6,
	MX = 15,
	TXT = 16,
	AAAA = 28,
	SRV = 33,
	DOA = 259,
}

export interface DOHResponse {
	/** The Response Code of the DNS Query. These are defined here: https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-6. */
	Status: number;

	/** If true, it means the truncated bit was set. This happens when the DNS answer is larger than a single UDP or TCP packet. TC will almost always be false with Cloudflare DNS over HTTPS because Cloudflare supports the maximum response size. */
	TC: boolean;
	/** If true, it means the Recursive Desired bit was set. This is always set to true for Cloudflare DNS over HTTPS. */
	RD: boolean;
	/** If true, it means the Recursion Available bit was set. This is always set to true for Cloudflare DNS over HTTPS. */
	RA: boolean;
	/** If true, it means that every record in the answer was verified with DNSSEC. */
	AD: boolean;
	/** If true, the client asked to disable DNSSEC validation. In this case, Cloudflare will still fetch the DNSSEC-related records, but it will not attempt to validate the records. */
	CD: boolean;

	Question: {
		/** The record name requested. */
		name: string;
		/** The type of DNS record requested. These are defined here: https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4. */
		type: DNSRecordType;
	}[];

	Answer?: {
		/** The record owner. */
		name: string;
		/** The type of DNS record. These are defined here: https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4. */
		type: DNSRecordType;
		/** The number of seconds the answer can be stored in cache before it is considered stale. */
		TTL: number;
		/** The value of the DNS record for the given name and type. The data will be in text for standardized record types and in hex for unknown types. */
		data: string;
	}[];

	/** List of EDE messages. Refer to [Extended DNS error codes](https://developers.cloudflare.com/1.1.1.1/infrastructure/extended-dns-error-codes/) for more */
	Comment?: string[];
}

export interface DOHError {
	error: string;
}

const query = async (name: string, type: string) => {
	const fetchUrl = new URL(DOH_ENDPOINT);
	fetchUrl.searchParams.set('name', name);
	if (type) fetchUrl.searchParams.set('type', type);

	const res = await fetch(fetchUrl, { headers: { accept: 'application/dns-json' } });
	const data = (await res.json()) as DOHResponse | DOHError;

	if ('error' in data) {
		throw new Error(`Error querying ${name} ${type}: ${data.error}`);
	}

	return data;
};

export const queryA = async (name: string) => {
	const data = await query(name, 'A');
	if (!data.Answer) return null;

	return data.Answer.map((k) => k.data);
};

export const queryAAAA = async (name: string) => {
	const data = await query(name, 'AAAA');
	if (!data.Answer) return null;

	return data.Answer.map((k) => k.data);
};

export const queryCNAME = async (name: string) => {
	const data = await query(name, 'CNAME');
	if (!data.Answer) return null;

	return data.Answer.map((k) => k.data);
};

export const queryTXT = async (name: string) => {
	const data = await query(name, 'TXT');
	if (!data.Answer) return null;

	return data.Answer.map((k) => k.data.substring(1, k.data.length - 1));
};

export const queryMX = async (name: string) => {
	const data = await query(name, 'MX');
	if (!data.Answer) return null;

	return data.Answer.filter((k) => k.type === DNSRecordType.MX).map((k) => {
		const fragments = k.data.split(' ');
		return { name: fragments[1], priority: Number(fragments[0]) };
	});
};
