<script>
	import { lang } from '$lib/lang';
</script>

<div class="container">
	<img src="/about.png" alt="Vera Image" class="image" />

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
		height: calc(100vh - 100px);
		overflow: hidden;
		color: white;
	}

	.image {
		height: 75%;
		padding: 40px;
		object-fit: cover;
	}

	.text {
		flex: 1;
		padding: 20px;
		overflow-y: auto;
		height: 100%;
		box-sizing: border-box;
		font-size: 24px;
		border-top-right-radius: 10%;
	}

	h1 {
		font-size: 45px;
		line-height: 0.1;
	}
</style>
