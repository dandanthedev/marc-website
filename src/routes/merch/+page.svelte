<script lang="ts">
	import { useQueryParams } from "$lib/params";
	import { onMount } from "svelte";
import {page} from '$app/stores';
    const params = useQueryParams($page.url);
    let picture: {
        id: string;
        url: string;
    } | null = null;
    onMount(async () => {
        console.log(params);
        const res = await fetch('/pictures/get/' + params[0].concert + '?id=' + params[0].pic);
        const data = await res.json();
        picture = data;
    });
    const designs = [
        {
            id: "tshirt",
            name: "T-shirt",
        },
        {
            id: "poster",
            name: "Poster",
        }, {
            id: "hoodie",
            name: "Hoodie",
        },{
            id: "bag",
            name: "Totebag"
        }
    ];
    let design: string | null = null;

</script>

<div class="orderOptions">
<select bind:value={design} class="design">
    <option value={null} disabled selected>Kies een design</option>
    {#each designs as design}
        <option value={design.id}>{design.name}</option>
    {/each}
</select>

{#if design === 'tshirt' || design === 'hoodie'}
<select>
    <option value={null} disabled selected>Kies een maat</option>
    <option>XS</option>
    <option>S</option>
    <option>M</option>
    <option>L</option>
    <option>XL</option>
    <option>XXL</option>
</select>
{/if}</div>

<div class="productDisplay">
{#if picture}
{#if design === 'poster'}
<img src={picture.url} alt="poster" class="poster" />
{/if}
{#if design === 'tshirt'}
<div class="tshirt">
    <img src={picture.url}  class="tshirtImage" alt="teeImage" />
    <img src="/store/tshirt.png" alt="tshirt" class="tshirtBg" />
</div>
{/if}
{/if}
</div>

<style>
    .productDisplay {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 2rem;
    }

        .poster {
            height: 400px;
            border-radius: 20px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

    .orderOptions {
        /*next to each other*/
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
        gap: 1rem;
        margin: 2rem;
    }

    select {
        padding: 10px;
        font-size: 15px;
        border-radius: 10px;
        border: none;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;   
    }

    .tshirt{
        position: relative;
      margin-left: -500px;
      
      
    }

    .tshirtBg{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 500px;
        height: 500px;
    }
    
    .tshirtImage{
        position: absolute;
        top: 150px;
        left: 145px;
        right: 0;
        bottom: 0;
        z-index: 10;
        width: 200px;
    }
</style>