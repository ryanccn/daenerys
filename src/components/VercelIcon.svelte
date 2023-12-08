<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	let _class: string | undefined = undefined;

	export { _class as class };
</script>

<a href="https://vercel.com/" rel="noopener noreferrer">
	<svg
		width="76"
		height="65"
		viewBox="0 0 76 65"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={twMerge('text-black dark:text-white', _class)}
	>
		<path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor" />
	</svg>
</a>
