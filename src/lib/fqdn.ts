const FQDN_REGEX = /(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\.)+[a-zA-Z]{2,63}$)/;

export const isFQDN = (abc: string) => {
	return !!FQDN_REGEX.exec(abc);
};
