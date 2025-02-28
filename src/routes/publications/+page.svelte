<script lang="ts">
    import publications from '$lib/publications.json';
</script>

<div class="container">
    {#each publications as publication}
    <a class="publication" href="/publications/{publication.id}">
        <img src={publication.pictures[Math.floor(Math.random() * publication.pictures.length)]} alt="publication" class="picture" />
        <h2 class="title">{publication.title}</h2>
    </a>
    {/each}
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
        margin: 2rem;
       margin-top: 50px;
    }

    .title {
        text-align: center;
        font-size: 25px;
        color: white;
    }

    .publication {
        width: 300px;
        height: 200px;
    position: relative;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
    }

    .publication:hover {
        transform: scale(1.1);
    }

    .picture {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        opacity: 0.7;
        border: 2px solid white;

    }

  .title{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    margin-bottom: 20px;
  }


  

</style>