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
	<div class="mb-16 flex flex-col gap-x-8 gap-y-4 p-8 md:flex-row md:items-center">
		<a href="/"><h1 class="text-2xl font-bold tracking-tight">Daenerys</h1></a>

		<div class="flex flex-grow flex-row items-center gap-x-4">
			<input
				type="url"
				class="grow rounded bg-stone-100 px-4 py-3 font-mono text-sm shadow-sm focus:outline-none focus:ring-2 disabled:opacity-75 dark:bg-stone-900"
				placeholder="ryanccn.dev"
				disabled={loading}
				bind:value={$fqdnBar}
				on:keydown={searchEntry}
			/>
			<button
				class="rounded bg-gradient-to-br from-rose-500 to-purple-500 px-4 py-3 text-sm font-medium text-white disabled:opacity-75"
				disabled={loading || $fqdnBar.length === 0}
				on:click={() => {
					goto(`/${$fqdnBar}`);
				}}
			>
				Query
			</button>
		</div>
	</div>
	<div class="mb-36 px-8 lg:px-24">
		<slot />
	</div>
</div>
