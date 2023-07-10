<script>
	import '../app.postcss';
	import Header from './Header.svelte';
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'

	export let data

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<div class="app">
	<Header userData={session?.user} supabase={supabase} />
	<div class="container max-w-5xl px-2">
		<main class="py-4">
			<slot />
		</main>
	</div>
</div>
