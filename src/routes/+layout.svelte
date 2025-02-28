<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { lang, langs } from '$lib/lang';

	onMount(() => {
		const currentLang = localStorage.getItem('lang');
		if (currentLang) {
			const found = langs.find((lang) => lang.lang === currentLang);
			if (found) $lang = found;
			else localStorage.removeItem('lang');
		}
	});
</script>

<Header />
<slot />
<Footer />
