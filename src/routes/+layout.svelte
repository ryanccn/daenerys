<script lang="ts">
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	import { fqdnBar } from '~/lib/stores';
	import '~/tailwind.css';

	const searchEntry = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			goto(`/${$fqdnBar}`);
		}
	};

	beforeNavigate(() => {
		loading = true;
	});
	afterNavigate(() => {
		loading = false;
	});

	let loading = false;
</script>

<div class="flex flex-col">
	<div class="px-8 py-4 flex flex-row items-center gap-x-8 mb-16">
		<a href="/"><h1 class="font-bold tracking-tight text-2xl">Daenerys</h1></a>
		<input
			type="url"
			class="px-4 py-2 font-mono text-sm rounded bg-stone-100 grow shadow-sm focus:outline-none focus:ring-2 disabled:opacity-75"
			placeholder="vercel.com"
			disabled={loading}
			bind:value={$fqdnBar}
			on:keydown={searchEntry}
		/>
	</div>
	<div class="px-4 lg:px-24 mb-36">
		<slot />
	</div>
</div>
