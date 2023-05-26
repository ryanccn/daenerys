<script lang="ts">
	import { fqdnBar } from '~/lib/stores';

	$fqdnBar = '';
</script>

<svelte:head>
	<title>Daenerys</title>
</svelte:head>

<div class="min-h-[calc(100vh-20rem)] flex flex-col gap-y-4 justify-center">
	<h1 class="text-2xl font-semibold">Welcome to Daenerys</h1>
	<h2 class="text-6xl font-extrabold tracking-tight mb-16">Gain insights from DNS records</h2>

	<div class="flex flex-row gap-x-4">
		<a
			href="https://github.com/ryanccn/daenerys"
			class="px-4 py-3 rounded-md font-medium text-sm border border-neutral-300 hover:border-neutral-400 transition-colors"
		>
			Source
		</a>
		<a
			href="https://ryanccn.dev"
			class="px-4 py-3 rounded-md font-medium text-sm border border-neutral-300 hover:border-neutral-400 transition-colors"
		>
			A Ryan Cao project
		</a>
	</div>
</div>
