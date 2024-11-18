<script>
    import {lang,langs} from "$lib/lang";
</script>

<header>
    <img src="/logo.svg" alt="vera logo"/>
    <h1>Marc de Krosse!!11!!!</h1>
    <div class="lang">
    {#each langs as availableLanguage}
<button onclick={() => {
    $lang = availableLanguage;
}}>
{availableLanguage.lang}
</button>
{/each}
</div>  
</header>

<style>
    header{
        background-color: rgb(0, 0, 0);
        padding:10px;
        border-radius: 10px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    img{
        height: 80px;
        width: auto;
        transform: skewY(-5deg) rotate(-10deg) skewX(5deg);
    }

    .lang{
        display: flex;
        gap: 10px;
    }
    button{
        background-color: transparent;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;

    }

    h1{
        /*rainbow text*/
        background-image: linear-gradient(to right, rgb(255, 0, 0), rgb(255, 154, 0), rgb(208, 222, 33), rgb(79, 220, 74));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 40px;
        
    }

</style>