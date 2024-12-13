<script>
	import { lang } from '$lib/lang';
	import aboutImage from '$lib/assets/about.png?enhanced';
	import SvelteSEO from "svelte-seo";
</script>
<SvelteSEO
  title="Marc de Krosse | About"
  description="Wie is Marc de Krosse?"
/>
<div class="container">
	<enhanced:img src={aboutImage} alt="Vera Image" class="image" /> 

	<!-- Tekst -->
	<div class="text">
		<h1>Vera</h1>
		<p>
			{$lang.about.first}
		</p>
		<h1>{$lang.about.secondAnnouncement}</h1>

		<p>
			{$lang.about.second}
		</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: Arial, sans-serif;
		display: flex;
		justify-content: center;
		height: calc(100vh - 190px);
		overflow: hidden;
		color: white;
	}

	.image {
		height: 80%;
		padding-left: 40px;
		padding-top: 45px;
		object-fit: cover;
		border-radius: 10px;
	}

	.text {
		flex: 1;
		padding-left: 50px;
		padding-top: 30px;
		overflow-y: auto;
		height: 100%;
		box-sizing: border-box;
		font-size: 26px;
		padding-right: 300px;
		
	}

	h1 {
		font-size: 35px;
		line-height: 0.1;
	}
</style>
