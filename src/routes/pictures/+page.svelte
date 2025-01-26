<script lang="ts">
	export let data;

	let concerts: {
		id: string;
		title: string;
		date: string | null;
		photos: string[];
	}[] = data.initialConcerts;

	console.log(concerts);
	let pageToLoad = 2; //pageToLoad is 2, because page 1 is loaded through ssr
	let reachedEnd = false;
	let fetching = false;

	let search = '';
	let sort = 'date';
	let order = 'desc';

	let mappedPics: { [key: string]: string } = data.initialMappedPics;
	async function fetchNextPage(replace: boolean = false) {
		if (fetching) return;
		fetching = true;
		console.log('fetching next page');
		const searchParams = new URLSearchParams();
		if (search !== '') searchParams.set('q', search);
		searchParams.set('page', pageToLoad.toString());
		searchParams.set('sort', sort);
		searchParams.set('order', order);
		const res = await fetch(`/pictures/get?${searchParams}`);
		const data = await res.json();

		data.data.forEach((concert: { id: string; photos: string[] }) => {
			if (mappedPics[concert.id]) return;
			mappedPics[concert.id] = concert.photos[Math.floor(Math.random() * concert.photos.length)];
		});

		if (replace) concerts = data.data;
		else concerts = [...concerts, ...data.data];
		pageToLoad++;
		if (data.last) reachedEnd = true;

		fetching = false;
	}
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
	bind:value={search}
	placeholder="Zoeken"
	on:input={() => {
		pageToLoad = 1;
		if (search === '') reachedEnd = false;
		fetchNextPage(true);
	}}
	class="search"
/>
<div class="filters">
	<select
		bind:value={sort}
		class="sort"
		on:change={() => {
			if (sort === 'title') order = 'asc';
			if (sort === 'date') order = 'desc';
			pageToLoad = 1;
			reachedEnd = false;
			fetchNextPage(true);
		}}
	>
		<option value="date">Sorteren op datum</option>
		<option value="title">Sorteren op titel</option>
	</select>
	<select
		bind:value={order}
		class="sort"
		on:change={() => {
			pageToLoad = 1;
			reachedEnd = false;
			fetchNextPage(true);
		}}
	>
		<option value="asc">Oplopend</option>
		<option value="desc">Aflopend</option>
	</select>
</div>

<div class="container">
	{#each concerts as concert}
		<a class="concert" href="/pictures/{concert.id}">
			<img
				src={mappedPics[concert.id]}
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
	.notification {
		text-align: center;
		font-size: 30px;
		color: white;
	}

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
