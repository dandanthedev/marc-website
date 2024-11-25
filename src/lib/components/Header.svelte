<script>
    import {lang,langs} from "$lib/lang";
    import { page } from '$app/stores';  

    const pages = $derived([{
        url: '/',
        title: $lang.pages.home
    },
    {
        url: '/pictures',
        title: $lang.pages.pictures
    },
    {
        url: "/publications",
        title: $lang.pages.publications
    },
    {
        url: '/about',
        title: $lang.pages.about
    },
    {
        url: "/merch",
        title: "Merch"
    }, {
        url: '/contact',
        title: $lang.pages.contact
    }, ])
 
    const pictureId = Math.floor(Math.random() * 5) + 1;
</script>

<header>
    <div class="logo">
    <img src="/logo.svg" alt="vera logo" class="vera"/>
    <div class="name">
    <h1>Marc de Krosse</h1>
    <p class="job">{$lang.concertPhotographer}</p>
</div>

<div class="row navigation">
    {#each pages as navigationPage}
        <a href={navigationPage.url} class:selected={$page.url.pathname === navigationPage.url}>{navigationPage.title}</a>
        {/each}
</div>

<div class="lang">
    {#each langs as availableLanguage}
    <button onclick={() => {
    $lang = availableLanguage;
    }}>
    <img src={"/flags/" + availableLanguage.lang.toLowerCase() + ".svg"} alt={availableLanguage.lang} class="langImg"/> 
    </button>
    {/each}
    </div>  

</header>

    <!-- <img class="sideImg" src={"/header/" + pictureId + ".jpg"} alt="header picture"/> -->


<style>
    header{
        background-color: rgb(0, 0, 0);
        padding:10px;
        border-radius: 10px;

   
        

    }
    .vera{
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
      color: white;
      font-size: 30px;
        
    }
    



    .logo{
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: left;
    }

    .job{
        font-size: 20px;
        margin-top: -15px;
    }

    .langImg{
        width: 50px;
    }
    

    .row{
        width: 100%;
        display: flex;
        align-items: center;
         justify-content: center;
         gap: 20px;
    }
    
    .navigation{
        display: flex;
       gap: 20px;
       align-items: center;
       justify-content: center;
    }
    .navigation a{
        color: white;
        font-size: 20px;
         text-decoration: none;
    }

    .navigation a:hover{
        color: #014FA3;
    }

    .navigation a.selected{
        color: #014FA3;
        font-weight: bold;
    }

    .name h1{
        width: 300px;
    }

</style>