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
    let size: string | null = null;
    let bought = false;

</script>

{#if bought}
<div class="bought">Gekocht!</div>
{/if}
<div class="orderOptions">
<select bind:value={design} class="design">
    <option value={null} disabled selected>Kies een design</option>
    {#each designs as design}
        <option value={design.id}>{design.name}</option>
    {/each}
</select>

{#if design === 'tshirt' || design === 'hoodie' || design === "poster"}
<select
    bind:value={size}
>
    <option value={null} disabled selected>Kies een maat</option>
    {#if design === "poster"}
    <option>40x60</option>
    <option>50x70</option>
    {:else}
    <option>XS</option>
    <option>S</option>
    <option>M</option>
    <option>L</option>
    <option>XL</option>
    <option>XXL</option>
    <option>XXXL</option>
    <option>XXXXL</option>
    <option>XXXXXL</option>
    <option>XXXXXXL</option>
    <option>XXXXXXXL</option>
    <option>XXXXXXXXL</option>
    <option>XXXXXXXXXL</option>
    <option>XXXXXXXXXXL</option>
    {/if}
</select>
{/if}

<select name="Aantal" id="">
    <option value={null} >Kies een aantal</option>
    {#each [1,2,3,4,5,6,7,8,9,10] as amount}
    <option>{amount}</option>
    {/each}
</select>
</div>
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
{#if design ==="hoodie"}
<div class="tshirt">
    <img src={picture.url}  class="tshirtImage hoodieImg" alt="teeImage" />
    <img src="/store/hoodie.png" alt="tshirt" class="tshirtBg" />
</div>
{/if}
{#if design ==="bag"}
<div class="tshirt">
    <img src={picture.url}  class="tshirtImage bagImg" alt="teeImage" />
    <img src="/store/bag.png" alt="tshirt" class="tshirtBg" />
</div>
{/if}
{/if}

</div>
{#if design && size}
<button class="buyButton"
    on:click={() => {
        bought = true;
    }}
>Bestellen</button>
{/if}

<style>

 
    .buyButton{
        padding: 10px;
        font-size: 20px;
        padding-left: 30px;
        padding-right: 30px;
    }


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
        height: 200px;
        object-fit: contain;
    }

    .hoodieImg {
        margin-top: -10px;
        height: 150px;
    }

    .bagImg{
        width: 300px;
        height: 200px;
        margin-left: -40px;
        margin-top: 80px;
    }

    .bought{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: white;
        font-size: 40px;
        z-index: 10000;
        display:flex;
    align-items: center;
    justify-content: center;
    }
</style>