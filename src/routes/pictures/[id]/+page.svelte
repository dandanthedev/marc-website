<script lang="ts">
	import { fade } from 'svelte/transition';
	import { useQueryParams } from "$lib/params"; 
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let modalI: number | null = null;
	const [params, helpers] = useQueryParams($page.url); // You must pass the URL

	export let data;

</script>

{#if params.buy}
	<h1>Kies een foto om te bestellen!</h1>
{/if}

{#if modalI !== null && data.concert}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="modal"
		on:click={(e) => {
			const target = e.target as HTMLElement;
			if (
				target.id === 'modal-img' ||
				target.id === 'modal-controls' ||
				target.id === 'modal-controls-button'
			)
				return;
			modalI = null;
		}}
		transition:fade={{ duration: 200 }}
	>
		<img src={data.concert.photos[modalI].url} alt="concert" loading="eager" id="modal-img" />
		<div class="controls" id="modal-controls">
			
			<div class="actualControls">
				<button
					id="modal-controls-button"
					on:click={() => {
						if (modalI === null) return;
						if (modalI === 0) modalI = data.concert.photos.length - 1;
						else modalI--;
					}}>{'<'}</button
				>

				<p>
					{modalI + 1}/{data.concert.photos.length}
				</p>

				<button
					id="modal-controls-button"
					on:click={() => {
						if (modalI === null) return;
						if (modalI === data.concert.photos.length - 1) modalI = 0;
						else modalI++; 
					}}>{'>'}</button
				>

				<a href="/merch?concert={data.concert.id}&pic={data.concert.photos[modalI].id}"
					class="buy"
				>Kopen</a>
		
			
			</div>
			<p class="credits">
				{data.concert.title} - {data.concert.date} - © {data.concert.authors}
			</p>
		</div>
	</div>
{/if}

{#if !data.concert}
	<h1>Concert niet gevonden</h1>
{:else}
	<h1>{data.concert.title}</h1>
	<p>{data.concert.date}</p>

	<div class="container">
		{#each data.concert.photos as photo, i}
		<button on:click={() => {
			if(params.buy) goto("/merch?concert=" + data.concert.id + "&pic=" + photo.id)

			
			else modalI = i
		}}>
				<img
					src={photo.url}
					alt="concert"
					width="300"
					height="200"
					loading="lazy"
					fetchpriority="high"
				/>
			</button>
		{/each}
	</div>
{/if}

<style>
	h1 {
		text-align: center;
		font-size: 30px;
		color: white;
	}

	p {
		text-align: center;
		font-size: 20px;
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

	.container button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	.container img {
		border-radius: 10px;
		object-fit: cover;
	}

	.modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		border: none;
		cursor: pointer;
	}

	.modal img {
		max-width: 100%;
		max-height: 100%;
		border-radius: 10px;
		object-fit: contain;
		cursor: default;
	}

	.controls {
		position: fixed;
		bottom: 50px;
		left: 0;
		right: 0;

		margin-bottom: 20px;
	}

	.actualControls {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.controls button {
		font-size: 20px;
		cursor: pointer;
	}

	.credits {
		font-size: 15px;
		color: white;
		font-family: Arial, sans-serif;
		padding: 5px;
		padding-top: 0;
		margin-top: 0;
	}

	.buy{
		color: #fff;
		font-weight: bold;
	}
</style>
