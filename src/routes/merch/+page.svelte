<script>
    import store from '$lib/store.json';
</script>

<div class="container">
    {#each store as item}
        <div class="item">
            <div >
                <img src={item.img} alt={item.name} class="image" />
            <div class="description">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
            </div>  
            <button class="add">
                Toevoegen aan winkelwagen
            </button>
        </div>
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 2rem;
    }
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
 
    gap: 1rem;
        margin: 1rem;
        background-color: white;
        width: 300px;
        padding: 1rem;
        border-radius: 20px;
        height: 450px;
    }

    .image {
        height: 200px;
        padding: 1rem;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    .description {
        margin-top: 1rem;
        text-align: center;
    }

    .description h2 {
        font-size: 1.6rem;
    }

    .description p {
        font-size: 1rem;
    }

    .add{
        background-color: #f79238;
        color: white;
        border: none;
        padding: 1rem;
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        font-family: "Arial", sans-serif;
    
    }
</style>