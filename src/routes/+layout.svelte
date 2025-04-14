<script lang="ts">
	import { version } from '$app/environment';
	import '$lib/styles/app.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="version" content={version} />
</svelte:head>

{@render children()}
