<script>
	import { lang, langs } from '$lib/lang';
	import { page } from '$app/stores';
	import Fa from 'svelte-fa';
	import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
	import { fade } from 'svelte/transition';
	import logo from '$lib/assets/headerlogo.gif';

	let mobileMenuOpen = $state(false);

	const pages = $derived([
		{
			url: '/',
			title: $lang.pages.home,
			disableSubPages: true
		},
		{
			url: '/pictures',
			title: $lang.pages.pictures
		},
		{
			url: '/publications',
			title: $lang.pages.publications
		},
		{
			url: '/about',
			title: $lang.pages.about
		},
		{
			url: '/merch',
			title: 'Merch'
		},
		{
			url: '/contact',
			title: $lang.pages.contact
		}
	]);
</script>

{#snippet flags()}
	<div class="lang">
		{#each langs as availableLanguage}
			<button
				onclick={() => {
					$lang = availableLanguage;
					localStorage.setItem('lang', availableLanguage.lang);
				}}
			>
				<img
					src={'/flags/' + availableLanguage.lang.toLowerCase() + '.svg'}
					alt={availableLanguage.lang}
					class="langImg"
				/>
			</button>
		{/each}
	</div>
{/snippet}

{#if mobileMenuOpen}
	<div class="mobileMenu" transition:fade={{ duration: 200 }}>
		<div class="menu">
			{#each pages as navigationPage}
				<a
					href={navigationPage.url}
					class:selected={navigationPage.disableSubPages
						? $page.url.pathname === navigationPage.url
						: $page.url.pathname.startsWith(navigationPage.url)}
					onclick={() => {
						mobileMenuOpen = false;
					}}>{navigationPage.title}</a
				>
			{/each}

			{@render flags()}
		</div>
	</div>
{/if}

<header>
	<div class="logo">
		<a href="/">
			<img src={logo} alt="vera logo" class="vera" />
		</a>
		<div class="name">
			<h1>Marc de Krosse</h1>

			<p class="job">{$lang.concertPhotographer}</p>
		</div>

		<div class="row mobileButton">
			<button
				onclick={() => {
					mobileMenuOpen = !mobileMenuOpen;
				}}
			>
				<Fa icon={faBars} />
			</button>
		</div>

		<div class="row navigation">
			{#each pages as navigationPage}
				<a
					href={navigationPage.url}
					class:selected={navigationPage.disableSubPages
						? $page.url.pathname === navigationPage.url
						: $page.url.pathname.startsWith(navigationPage.url)}>{navigationPage.title}</a
				>
			{/each}
		</div>

		<div class="hideOnMobile">
			{@render flags()}
		</div>
	</div>
</header>
<div class="headerSpacer"></div>

<!-- <img class="sideImg" src={"/header/" + pictureId + ".jpg"} alt="header picture"/> -->

<style>
	.hideOnMobile {
		display: block;
	}

	header {
		background-color: rgb(0, 0, 0);
		padding: 10px;
		color: white;
		top: 0;
		left: 0;
		right: 0;
		height: 100px;
		position: absolute;
		z-index: 100;
		border-bottom: 2px solid #f79238;
	}

	.headerSpacer {
		height: 110px;
	}

	.vera {
		height: 80px;
		width: auto;
		transform: skewY(-5deg) rotate(-10deg) skewX(5deg);
	}

	.lang {
		display: flex;
		gap: 10px;
		margin-right: 20px;
	}
	button {
		background-color: transparent;
		border: none;
		color: white;
		font-size: 20px;
		cursor: pointer;
	}

	h1 {
		color: white;
		font-size: 30px;
	}

	.logo {
		display: flex;
		gap: 20px;
		align-items: center;
		justify-content: left;
	}

	.job {
		font-size: 20px;
		margin-top: -15px;
	}

	.langImg {
		width: 50px;
	}

	.row {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}

	.navigation {
		display: flex;
		gap: 20px;
		align-items: center;
		justify-content: center;
	}
	.navigation a {
		color: white;
		font-size: 20px;
		text-decoration: none;
	}

	.navigation a:hover {
		color: #f79238;
	}

	.navigation a.selected {
		color: #f79238;
	}

	.name h1 {
		width: 230px;
	}

	.mobileButton {
		display: none;
		text-align: right;
	}

	.mobileButton button {
		background-color: transparent;
		border: none;
		color: white;
		font-size: 30px;
		cursor: pointer;
		text-align: right;
	}

	.mobileButton button:hover {
		color: #014fa3;
	}

	@media (max-width: 1200px) {
		.navigation {
			display: none;
		}

		.mobileButton {
			display: block;
		}

		.hideOnMobile {
			display: none;
		}
	}

	@media (max-width: 410px) {
		.name h1 {
			width: 200px;
			font-size: 24px;
		}
	}

	.mobileMenu {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;

		backdrop-filter: blur(10px);
	}

	.closeButton {
		position: absolute;
		top: 10px;
		right: 10px;
	}

	.closeButton button {
		background-color: transparent;
		border: none;
		color: white;
		font-size: 50px;
		cursor: pointer;
	}

	.menu {
		display: flex;
		flex-direction: column;
		gap: 20px;
		text-align: center;
	}
	.menu a {
		color: white;
		font-size: 30px;
		text-decoration: none;
	}
</style>
