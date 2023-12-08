<script lang="ts">
	import { fqdnBar } from '~/lib/stores';

	$fqdnBar = '';
</script>

<svelte:head>
	<title>Daenerys</title>
</svelte:head>

<div class="flex min-h-[calc(100vh-20rem)] flex-col justify-center gap-y-4">
	<h1 class="text-2xl font-semibold">Welcome to Daenerys</h1>
	<h2 class="mb-16 text-6xl font-extrabold tracking-tight">Gain insights from DNS records</h2>

	<div class="flex flex-row gap-x-4">
		<a
			href="https://github.com/ryanccn/daenerys"
			class="rounded-md border border-stone-300 px-4 py-3 text-sm font-medium transition-colors hover:border-neutral-400 dark:border-stone-700"
		>
			Source
		</a>
		<a
			href="https://ryanccn.dev"
			class="rounded-md border border-stone-300 px-4 py-3 text-sm font-medium transition-colors hover:border-neutral-400 dark:border-stone-700"
		>
			A Ryan Cao project
		</a>
	</div>
</div>
