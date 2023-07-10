<script lang="ts">
	import type { AuthUser, SupabaseClient, User } from '@supabase/supabase-js';
	import {
		Avatar,
		Button,
		Dropdown,
		DropdownDivider,
		DropdownHeader,
		DropdownItem,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar
	} from 'flowbite-svelte';

	export let userData: User  | undefined;
	$: user = userData?.user_metadata;
	export let supabase: SupabaseClient;
</script>

<Navbar
	let:hidden
	let:toggle
	classNavDiv="container max-w-5xl flex justify-between items-center"
	class="!bg-[#1A1B1E] border-b border-gray-800"
>
	<NavHamburger on:click={toggle} btnClass="m-0 p-0"/>

	<NavBrand href="/">
		<img src="/favicon.png" class="mr-3 h-6 sm:h-9" alt="Svelte Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Svelte
		</span>
	</NavBrand>
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/services">Services</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>

	{#if user}
		<div class="flex items-center md:order-2">
			<Avatar id="avatar-menu" src={user.avatar_url} />
		</div>
		<Dropdown placement="bottom" triggeredBy="#avatar-menu">
			<DropdownHeader>
				<span class="block text-sm">{user.full_name}</span>
				<span class="block truncate text-sm font-medium">{user.email} </span>
			</DropdownHeader>
			<DropdownItem>Dashboard</DropdownItem>
			<DropdownItem>Settings</DropdownItem>
			<DropdownItem>Earnings</DropdownItem>
			<DropdownDivider />
			<DropdownItem>Sign out</DropdownItem>
		</Dropdown>
	{:else}
		<Button
			on:click={() => {
				supabase.auth.signInWithOAuth({
					provider: 'google'
				});
			}}>Sign-in</Button
		>
	{/if}
</Navbar>
