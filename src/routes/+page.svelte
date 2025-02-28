<script>
	import { lang } from '$lib/lang';
	import { Youtube } from 'svelte-youtube-lite';

	import homeImage from '$lib/assets/home.jpg?enhanced';
	import SvelteSeo from "svelte-seo";

</script>

<SvelteSeo
  title="Marc de Krosse | Home"
  description="Welkom op de website van Marc de Krosse!"
/>

<div class="twoItems">
	<div class="item homePictureContainer">
		<enhanced:img src={homeImage} alt="Thuisfoto" class="homePicture" />
	</div>
	<h1 class="item welcome">{@html $lang.welcome}</h1>

	<div class="item ytGrid">
		<div class="video">
			<Youtube id="UP_743Av4XI" showTitle={false} />
		</div>
		<div class="video">
			<Youtube id="XZqipNRpW6U" showTitle={false} />
		</div>

		<div class="video">
			<Youtube id="bYMXWE_PATY" showTitle={false} />
		</div>
		<div class="video">
			<Youtube id="hGf8rLqI_dA" showTitle={false} />
		</div>
	</div>
</div>

<style>
	h1 {
		text-align: center;
		font-size: 40px;
		color: white;
	}

	.twoItems {
		display: flex;
		margin-top: 10px;
		gap: 20px;
		height: 700px;
	}

	.item {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.video {
		width: 100%;
		max-width: 280px;
		padding: 10px;
	}

	.ytGrid {
		display: flex;
		flex-direction: col;

		margin: 0 auto;
	}

	.ytGrid .item {
		width: 100%;
		margin-bottom: 20px;
	}

	.welcome {
		text-align: center;
	}

	img {
		border-radius: 10px;
	}

	.homePicture {
		height: 690px;
	}

	@media (max-width: 1070px){
		.twoItems{
			flex-direction: column;
			margin-bottom:50px;
		}

	}
	@media (max-width: 920px){
		h1{
			font-size: 30px;
		}
	}
</style>
