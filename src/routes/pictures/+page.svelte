<script lang="ts">
	import { goto } from '$app/navigation';
    import { page } from '$app/stores';
	import { lang } from '$lib/lang.js';
	import { useQueryParams } from "$lib/params"; 
	import { onMount } from 'svelte';

	let concerts: {
		id: string;
		title: string;
		date: string | null;
		photos: string[];
	}[] = [];

	console.log(concerts);
	let pageToLoad = 1; 
	let reachedEnd = false;

	const [params, helpers] = useQueryParams($page.url); // You must pass the URL
	

	let i = 0;

	async function fetchNextPage(replace: boolean = false) {
		i++;
		const cachedI = parseInt(`${i}`);
		console.log('fetching next page');
		const searchParams = new URLSearchParams();
		if (params.q !== '') searchParams.set('q', params.q);
		searchParams.set('page', pageToLoad.toString());
		searchParams.set('sort', params.sort);
		searchParams.set('order', params.order);
		const res = await fetch(`/pictures/get?${searchParams}`);
		const data = await res.json();

		if (data.error) return alert(data.error);
		console.log(i, cachedI);
		if(i !== cachedI) return;

		if (replace) concerts = data.data;
		else concerts = [...concerts, ...data.data];
		pageToLoad++;
		if (data.last) reachedEnd = true;

	}

	onMount(() => {
		fetchNextPage(true);
	})
</script>

<svelte:window
	on:scroll={() => {
		if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
			if (!reachedEnd) {
				fetchNextPage();
			}
		}
	}}
/>

<input
	type="text"
	bind:value={params.q}
	placeholder={$lang.sort.search}
	on:input={ async() => {
		await new Promise((r) => setTimeout(r, 1));
		pageToLoad = 1;
		if (params.q === '') reachedEnd = false;
		fetchNextPage(true);
	}}
	class="search"
/>
<div class="filters">
	<select
		bind:value={params.sort}
		class="sort"
		on:change={(e) => {
			const value = (e.target as HTMLSelectElement).value;
			//@ts-ignore miss ooit fiksen
			if (value === 'title') params.order = 'asc';
			//@ts-ignore miss ooit fiksen
			if (value === 'date') params.order = 'desc';
			pageToLoad = 1;
			reachedEnd = false;
			
			fetchNextPage(true);
		}}
	>
		<option value="date">{$lang.sort.prefix}{$lang.sort.date}</option>
		<option value="title">{$lang.sort.prefix} {$lang.sort.title}</option>
	</select>
	<select
		bind:value={params.order}
		class="sort"
		on:change={() => {
			pageToLoad = 1;
			reachedEnd = false;
			fetchNextPage(true);
		}}
	>
		<option value="asc">{$lang.sort.ascending}</option>
		<option value="desc">{$lang.sort.descending}</option>	
	</select>
</div>

<div class="container">
	{#each concerts as concert}
		<a class="concert" href="/pictures/{concert.id}">
			<img
				src={concert.cover}
				alt="concert"
				width="300"
				height="200"
				loading="lazy"
				fetchpriority="high"
			/>
			<div class="info">
				<div class="infoData">
					<h1>{concert.title}</h1>
					<p>{concert.date}</p>
				</div>
			</div>
		</a>
	{/each}
</div>

<style>
	

	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
		margin-top: 10px;
		margin-bottom: 20px;
	}

	.concert {
		position: relative;
		width: 300px;
		height: 200px;

	    transition: all 0.3s ease-in-out;

	}
	.concert:hover{
		transform: scale(1.1);
	}

	.info {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}

	.infoData {
		padding: 10px;
		color: white;
	}

	.infoData h1 {
		font-size: 20px;
	}

	.infoData p {
		font-size: 15px;
	}

	img {
		border-radius: 10px;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
	}

	.search {
		display: block;
		width: 90%;
		padding: 10px;
		font-size: 20px;
		border-radius: 10px;
		border: none;
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		margin: 0 auto;
		margin-top: 20px;
	}

	.filters {
		display: flex;
		gap: 20px;
		margin-top: 10px;
		justify-content: center;
	}

	.filters select {
		padding: 10px;
		font-size: 15px;
		border-radius: 10px;
		border: none;
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
	}
</style>
