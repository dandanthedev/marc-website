<script>

	import { lang } from "$lib/lang";
	import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
	import Fa from "svelte-fa";

</script>
<div class="footerSpacer"></div>

<footer>
	<a href="https://www.vera-groningen.nl/photos/?category=marc-de-krosse" target="_blank">
		<img src="/logo.svg" alt="Vera Logo" class="veraLogo" />
	</a>
	<a href="https://www.youtube.com/@looptoprolletjes" target="_blank">
		<Fa icon={faYoutube} color="white" size="2x"/>
		</a>
		<a href="https://www.instagram.com/marcdekrosse/" target="_blank">
			<Fa icon={faInstagram} color="white" size="2x"/>
		</a>
	<div class="footerText">
	<p class="fullCredit">
		© {new Date().getFullYear()} Daan Schenkel, Yang Pei Fokkens & Eetu Kallio  | {$lang.footer.school}
	</p>
	<p class="smallCredit">
		© {new Date().getFullYear()}
		</p>
</div>
</footer>

<style>
	.smallCredit {
		display: none;
	}

	@media (max-width: 1100px) {
		.fullCredit {
			display: none;
		}
		.smallCredit {
			display: flex;
		}
	}



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
