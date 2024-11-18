<script>
	import Header from "$lib/components/Header.svelte";
    import "../app.css";
</script>
<div class="container">
<Header/>
<slot/>
</div>



<style>
.container{
    background-color: rgb(43, 43, 43);
     min-height: 100vh;

     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;

     color: white;
}
</style>
