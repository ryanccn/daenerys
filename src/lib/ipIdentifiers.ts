import ipaddr from 'ipaddr.js';

const CLOUDFLARE_IPV4 = [
	'173.245.48.0/20',
	'103.21.244.0/22',
	'103.22.200.0/22',
	'103.31.4.0/22',
	'141.101.64.0/18',
	'108.162.192.0/18',
	'190.93.240.0/20',
	'188.114.96.0/20',
	'197.234.240.0/22',
	'198.41.128.0/17',
	'162.158.0.0/15',
	'104.16.0.0/13',
	'104.24.0.0/14',
	'172.64.0.0/13',
	'131.0.72.0/22',
];

const CLOUDFLARE_IPV6 = [
	'2400:cb00::/32',
	'2606:4700::/32',
	'2803:f800::/32',
	'2405:b500::/32',
	'2405:8100::/32',
	'2a06:98c0::/29',
	'2c0f:f248::/32',
];

export const isCloudflareIP = (ip: string) => {
	const pIP = ipaddr.parse(ip);

	if (pIP.kind() === 'ipv4') {
		for (const ipv4Range of CLOUDFLARE_IPV4) {
			if (pIP.match(ipaddr.parseCIDR(ipv4Range))) return true;
		}
	} else if (pIP.kind() === 'ipv6') {
		for (const ipv6Range of CLOUDFLARE_IPV6) {
			if (pIP.match(ipaddr.parseCIDR(ipv6Range))) return true;
		}
	}

	return false;
};

const VERCEL_IPV4 = '76.76.21.0/24';

export const isVercelIP = (ip: string) => {
	const pIP = ipaddr.parse(ip);

	if (pIP.kind() === 'ipv4') {
		return pIP.match(ipaddr.parseCIDR(VERCEL_IPV4));
	}

	return false;
};
