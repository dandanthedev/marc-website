<script lang="ts">
import type { ActionData, PageData } from './$types';
	import { lang } from "$lib/lang";
	import { enhance } from '$app/forms';
    let { data, form }: { data: PageData, form: ActionData } = $props();
 

</script>

    <div class="contact-form">
        <form method="POST" use:enhance>
            <div class="form-group">
                <label for="name">{$lang.contact.name}</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">{$lang.contact.email}</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="message">{$lang.contact.message}</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">{$lang.contact.send}</button>
            {#if form?.message}
                <p>{form.message}</p>
            {/if}
          </form>
    </div>

<style>
    .contact-form {
        max-width: 500px;
        margin: 0 auto;
        background: white;
        padding: 20px;
        margin: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display:block;
        margin-left: auto;
        margin-right: auto;
        color: black;
    }
    .form-group {
        margin-bottom: 15px;
    }
    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    input, textarea {
        width: 95%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    button {
        padding: 12px 25px;
        background-color: #014FA3;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #033a75;
    }
</style>