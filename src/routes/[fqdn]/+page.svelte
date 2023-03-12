<script lang="ts">
	import { fqdnBar } from '~/lib/stores';
	import { CheckCircle, XCircle } from 'lucide-svelte';
	import { isCloudflareIP, isVercelIP } from '~/lib/ipIdentifiers';
	import CloudflareIcon from '~/components/CloudflareIcon.svelte';
	import VercelIcon from '~/components/VercelIcon.svelte';

	export let data;

	$fqdnBar = data.fqdn;
</script>

<div class="flex flex-col">
	<h1 class="text-5xl font-extrabold tracking-tight mb-12">{data.fqdn}</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
		<div class="flex flex-col rounded-xl p-10 bg-stone-100">
			<h2 class="text-2xl font-bold mb-4">Hosting</h2>
			<p class="text-stone-400">None found</p>
		</div>

		<div class="flex flex-col rounded-xl p-10 bg-stone-100">
			<h2 class="text-2xl font-bold mb-4">Email</h2>
			<ul class="flex flex-col gap-y-1">
				{#if data.mailResults.gSuite}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>G Suite</span>
					</li>
				{/if}
				{#if data.mailResults.outlook}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>Outlook</span>
					</li>
				{/if}
				{#if data.mailResults.tutanota}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>Tutanota</span>
					</li>
				{/if}
				{#if data.mailResults.zoho}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>Zoho</span>
					</li>
				{/if}
				{#if data.mailResults.fastmail}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>Fastmail</span>
					</li>
				{/if}
				{#if data.mailResults.mailgun}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>Mailgun</span>
					</li>
				{/if}
				{#if !Object.values(data.mailResults).filter((k) => k).length}
					<li class="text-stone-400">None found</li>
				{/if}
			</ul>
		</div>

		<div class="flex flex-col rounded-xl p-10 bg-stone-100">
			<h2 class="text-2xl font-bold mb-4">Verifications</h2>
			<ul class="flex flex-col gap-y-1">
				{#if data.verificationResults.googleSearchConsole}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>Google Search Console</span>
					</li>
				{/if}
				{#if data.verificationResults.keybase}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>Keybase</span>
					</li>
				{/if}
				{#if data.verificationResults.tutanota}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>Tutanota</span>
					</li>
				{/if}
				{#if data.verificationResults.zoho}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>Zoho</span>
					</li>
				{/if}
				{#if data.verificationResults.stripe}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>Stripe</span>
					</li>
				{/if}
				{#if data.verificationResults.apple}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>Apple</span>
					</li>
				{/if}
				{#if data.verificationResults.zoom}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>Zoom</span>
					</li>
				{/if}
				{#if data.verificationResults.notion}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>Notion</span>
					</li>
				{/if}
				{#if data.verificationResults.notion}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>Docusign</span>
					</li>
				{/if}
				{#if !Object.values(data.verificationResults).filter((k) => k).length}
					<li class="text-stone-400">None found</li>
				{/if}
			</ul>
		</div>
	</div>

	<div class="flex flex-col rounded-xl p-10 bg-stone-100">
		<h2 class="text-2xl font-bold mb-4">Raw DNS records</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#if data.records.a}
				<div class="flex flex-col gap-y-1">
					<h2 class="text-lg font-semibold mb-2">A</h2>

					{#each data.records.a as record}
						<p class="font-mono leading-tight text-sm break-all">
							{record}
							{#if isCloudflareIP(record)}
								<CloudflareIcon class="inline-block w-4 h-auto" />
							{/if}
							{#if isVercelIP(record)}
								<VercelIcon class="inline-block w-4 h-auto" />
							{/if}
						</p>
					{/each}
				</div>
			{/if}

			{#if data.records.aaaa}
				<div class="flex flex-col gap-y-1">
					<h2 class="text-lg font-semibold mb-2">AAAA</h2>

					{#each data.records.aaaa as record}
						<p class="font-mono leading-tight text-sm break-all">
							{record}
							{#if isCloudflareIP(record)}
								<CloudflareIcon class="inline-block w-4" />
							{/if}
							{#if isVercelIP(record)}
								<VercelIcon class="inline-block w-4" />
							{/if}
						</p>
					{/each}
				</div>
			{/if}

			{#if data.records.cname}
				<div class="flex flex-col gap-y-1">
					<h2 class="text-lg font-semibold mb-2">CNAME</h2>
					{#each data.records.cname as record}
						<p class="font-mono leading-tight text-sm break-all">{record}</p>
					{/each}
				</div>
			{/if}

			{#if data.records.mx}
				<div class="flex flex-col gap-y-1">
					<h2 class="text-lg font-semibold mb-2">MX</h2>
					{#each data.records.mx as record}
						<p class="font-mono leading-tight text-sm break-all">
							{record.name} <span class="text-stone-500">({record.priority})</span>
						</p>
					{/each}
				</div>
			{/if}

			{#if data.records.txt}
				<div class="flex flex-col gap-y-1">
					<h2 class="text-lg font-semibold mb-2">TXT</h2>
					{#each data.records.txt as record}
						<p class="font-mono leading-tight text-sm break-all">{record}</p>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
