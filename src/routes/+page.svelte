<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { Button } from 'flowbite-svelte';

	export let data;

	let { supabase, session } = data
	$: ({ supabase, session } = data)
	
	</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	
</section>
