<script>
    import {lang,langs} from "$lib/lang";
</script>

<header>
    <img src="/logo.svg" alt="vera logo"/>
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
        font-size: 25px;
        cursor: pointer;
        
    }
</style>