<script>
	import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../app.css";
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
     max-width: 1300px;
     margin: auto;


     border-radius: 10px;
}
</style>
