<script lang="ts">
	import { fqdnBar } from '~/lib/stores';
	import { CheckCircle } from 'lucide-svelte';

	import { isCloudflareIP, isVercelIP } from '~/lib/ipIdentifiers';
	import CloudflareIcon from '~/components/CloudflareIcon.svelte';
	import VercelIcon from '~/components/VercelIcon.svelte';

	export let data;

	$fqdnBar = data.fqdn;
</script>

<svelte:head>
	<title>{data.fqdn} · Daenerys</title>
</svelte:head>

<div class="flex flex-col">
	<h1 class="text-5xl font-extrabold tracking-tight mb-16">{data.fqdn}</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
		<div class="flex flex-col rounded-xl p-10 bg-stone-100">
			<h2 class="text-2xl font-bold mb-4">Email</h2>
			<ul class="flex flex-col gap-y-1">
				{#each data.mailResults as result (result.id)}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>{result.name}</span>
					</li>
				{/each}
			</ul>
		</div>

		<div class="flex flex-col rounded-xl p-10 bg-stone-100">
			<h2 class="text-2xl font-bold mb-4">Verifications</h2>
			<ul class="flex flex-col gap-y-1">
				{#each data.verificationResults as result (result.id)}
					<li class="flex flex-row gap-x-2 items-center">
						<CheckCircle class="block w-4 h-4 text-green-500" />
						<span>{result.name}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="flex flex-col rounded-xl p-10 bg-stone-100">
		<h2 class="text-2xl font-bold mb-4">Raw DNS records</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#if data.records.a}
				<div class="flex flex-col gap-y-1">
					<h2 class="text-lg font-semibold mb-2">A</h2>

					{#each data.records.a as record}
						<p class="font-mono text-sm break-all">
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
						<p class="font-mono text-sm break-all">
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
						<p class="font-mono text-sm break-all">{record}</p>
					{/each}
				</div>
			{/if}

			{#if data.records.mx}
				<div class="flex flex-col gap-y-1">
					<h2 class="text-lg font-semibold mb-2">MX</h2>
					{#each data.records.mx as record}
						<p class="font-mono text-sm break-all">
							{record.name} <span class="text-stone-500">({record.priority})</span>
						</p>
					{/each}
				</div>
			{/if}

			{#if data.records.txt}
				<div class="flex flex-col gap-y-1">
					<h2 class="text-lg font-semibold mb-2">TXT</h2>
					{#each data.records.txt as record}
						<p class="font-mono text-sm break-all">{record}</p>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
