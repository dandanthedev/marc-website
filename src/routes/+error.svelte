<script>
	import { lang } from '$lib/lang';
	import MarcInDeRuimte from '$lib/assets/marcinderuimte.png?enhanced';
</script>

<div>
	<enhanced:img src={MarcInDeRuimte} alt="Marc de Krosse" class="img" />
	<h1>{$lang.notFound.title}</h1>
	<p>{$lang.notFound.message}</p>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		flex-direction: column;
		margin-top: 10px;
		color: white;
		text-align: center;
	}

	.img {
		width: 300px;
		height: 300px;
		border-radius: 10px;
	}
</style>
