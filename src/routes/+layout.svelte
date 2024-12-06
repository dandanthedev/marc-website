<script>
	import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../app.css";
	import { onMount } from "svelte";
    import { lang, langs } from "$lib/lang";

    onMount(() => {
        const currentLang = localStorage.getItem('lang');
        if(currentLang) {
            $lang = langs.find(lang => lang.lang === currentLang);
        }
    });

</script>
<div class="container">
<Header/>
<slot/>
<Footer/>
</div>



<style>
.container{
    background-color: rgb(43, 43, 43);
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;

     color: white;

     width: 100%;
     margin: auto;


     border-radius: 10px;
}
</style>
