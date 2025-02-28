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
		width: 90%;
		min-height: 100%;
		margin: 0;
		margin-left: auto;
		margin-right: auto;

		padding-top: 0px;
		font-family: Arial, sans-serif;
		display: flex;
		justify-content: center;
		height: calc(100vh - 220px);
		overflow: hidden;
		color: white;
	}

	.image {
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
		margin: 10px;
	}

	.text {
		
		padding-left: 120px;
		padding-top: 10px;
		overflow-y: auto;
		height: 100%;
		box-sizing: border-box;
		font-size: 24px;
	margin-right: 0px;		
	}

	h1 {
		font-size: 35px;
		padding-bottom: 0px !important;
		margin-bottom: 0px !important;
	}

	p {
		margin-top: 8px;
	}

	@media (max-width: 1100px) {
		.container{
			flex-direction: column;
			height: unset;
		}

		.text{
			padding-left: 0px;
			width: 100%;
		}

	}
</style>
