<script>

	import { lang } from "$lib/lang";

</script>
<div>
<img src="/marcinderuimte.png" alt="Marc de Krosse" />
<h1>{$lang.notFound.title}</h1>
<p>{$lang.notFound.message}</p>
</div>

<style>
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        flex-direction: column;
        margin-top: 10px;
    }

    img{
        width: 400px;
        height: 400px;
        border-radius: 10px;
    }
</style>