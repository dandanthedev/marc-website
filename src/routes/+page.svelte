<script>
    import { lang,langs } from "$lib/lang";
</script>

{#each langs as availableLanguage}
<button onclick={() => {
    $lang = availableLanguage;
}}>
{availableLanguage.lang}
</button>
{/each}
<h1>{$lang.welcome}</h1>