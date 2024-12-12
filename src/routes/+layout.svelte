<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { lang, langs } from '$lib/lang';

	onMount(() => {
		const currentLang = localStorage.getItem('lang');
		if (currentLang) {
			$lang = langs.find((lang) => lang.lang === currentLang);
		}
	});
</script>

<Header />

<slot />
<Footer />
