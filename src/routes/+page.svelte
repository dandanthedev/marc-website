<script>
	import { lang } from '$lib/lang';
	import { Youtube } from 'svelte-youtube-lite';
</script>

<div class="center">
	<div class="twoItems">
		<div class="item">
			<img src="/home.jpg" alt="Thuisfoto" />
		</div>
		<h1 class="item">{$lang.welcome}</h1>

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
</div>

<style>
	h1 {
		text-align: center;
		font-size: 30px;
		max-width: 900px;
		margin-top: 10px;
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		max-width: 1200px;
		margin: 0 auto;
		margin-top: 10px;
	}

	.twoItems {
		display: flex;

		gap: 20px;
	}

	.item {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
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
</style>
