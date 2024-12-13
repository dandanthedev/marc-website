<div class="footerSpacer"></div>

<footer>
	<a href="https://vera-groningen.nl/" target="_blank">
		<img src="/logo.svg" alt="Vera Logo" class="veraLogo" />
	</a>
	<div class="footerText">
	<p>
		© {new Date().getFullYear()} Daan Schenkel, Eetu Kallio & Yang Pei Fokkens | Schoolopdracht
	</p>
</div>
</footer>

<style>
	.footerText {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.footerSpacer {
		height: 60px;
	}

	footer {
		position:fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgb(0, 0, 0);
		padding: 10px;
		text-align: center;
		margin-bottom: 0;
		margin-top: 10px;
		height: 60px;
		display: flex;
		align-items: center;
		gap: 20px;
	}
	p {
		color: white;
		font-size: 20px;
		text-align: center;
	}

	.veraLogo {
		width: 50px;
		transition: transform 0.2s ease-in-out;
	}

	.veraLogo:hover {
		transform: scale(1.1) rotate(10deg);
	}
</style>
