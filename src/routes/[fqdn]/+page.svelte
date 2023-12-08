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
	<h1 class="mb-16 text-5xl font-extrabold tracking-tight">{data.fqdn}</h1>

	<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
		<div class="flex flex-col rounded-xl bg-stone-100 p-10 dark:bg-stone-900">
			<h2 class="mb-4 text-2xl font-bold">Email</h2>
			<ul class="flex flex-col gap-y-1">
				{#each data.mailResults as result (result.id)}
					<li class="flex flex-row items-center gap-x-2">
						<CheckCircle class="block h-4 w-4 text-green-500" />
						<span>{result.name}</span>
					</li>
				{/each}
			</ul>
		</div>

		<div class="flex flex-col rounded-xl bg-stone-100 p-10 dark:bg-stone-900">
			<h2 class="mb-4 text-2xl font-bold">Verifications</h2>
			<ul class="flex flex-col gap-y-1">
				{#each data.verificationResults as result (result.id)}
					<li class="flex flex-row items-center gap-x-2">
						<CheckCircle class="block h-4 w-4 text-green-500" />
						<span>{result.name}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="flex flex-col rounded-xl bg-stone-100 p-10 dark:bg-stone-900">
		<h2 class="mb-4 text-2xl font-bold">Raw DNS records</h2>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			{#if data.records.a}
				<div class="flex flex-col gap-y-1">
					<h2 class="mb-2 text-lg font-semibold">A</h2>

					{#each data.records.a as record}
						<p class="break-all font-mono text-sm">
							{record}
							{#if isCloudflareIP(record)}
								<CloudflareIcon class="inline-block h-auto w-4" />
							{/if}
							{#if isVercelIP(record)}
								<VercelIcon class="inline-block h-auto w-4" />
							{/if}
						</p>
					{/each}
				</div>
			{/if}

			{#if data.records.aaaa}
				<div class="flex flex-col gap-y-1">
					<h2 class="mb-2 text-lg font-semibold">AAAA</h2>

					{#each data.records.aaaa as record}
						<p class="break-all font-mono text-sm">
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
					<h2 class="mb-2 text-lg font-semibold">CNAME</h2>
					{#each data.records.cname as record}
						<p class="break-all font-mono text-sm">{record}</p>
					{/each}
				</div>
			{/if}

			{#if data.records.mx}
				<div class="flex flex-col gap-y-1">
					<h2 class="mb-2 text-lg font-semibold">MX</h2>
					{#each data.records.mx as record}
						<p class="break-all font-mono text-sm">
							{record.name} <span class="text-stone-500">({record.priority})</span>
						</p>
					{/each}
				</div>
			{/if}

			{#if data.records.txt}
				<div class="flex flex-col gap-y-1">
					<h2 class="mb-2 text-lg font-semibold">TXT</h2>
					{#each data.records.txt as record}
						<p class="break-all font-mono text-sm">{record}</p>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
