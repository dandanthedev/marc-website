<script lang="ts">
    export let data;
</script>

{#if !data.publication}
    <h1>Publicatie niet gevonden</h1>
{:else}
    <h1>{data.publication.title}</h1>
    <div class="container">
        {#each data.publication.pictures as picture}
        <img src={picture} alt="picture" class="picture" />
        {/each}
    </div>
{/if}

<style>
    h1 {
        text-align: center;
        font-size: 30px;
        color: white;
    }
.container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
        margin: 2rem;
       margin-top: 50px;
    }

    .picture {
        height: 300px;
    }


   
</style>