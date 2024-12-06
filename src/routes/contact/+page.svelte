<script lang="ts">
import type { ActionData, PageData } from './$types';
	import { lang } from "$lib/lang";
	import { enhance } from '$app/forms';
    let { data, form }: { data: PageData, form: ActionData } = $props();
 

</script>
<div class="align">
    <div>
<h1>
    Neem Zelf Contact Op Met Marc
</h1>
<p>
E-mailadres: marcdekrosse@heetmail.kom
<br/>
Telefoonnummer: +31 6 12345678
<br/>
Adres: Oosterstraat 44, Groningen, Nederland
</p>
</div>
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


    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.0456978399156!2d6.567531077062047!3d53.21702898439117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c9cd56c4852557%3A0xe2ed17b9050edcc5!2sVera!5e0!3m2!1sen!2snl!4v1733473891996!5m2!1sen!2snl" 
width="600" height="450" fixed style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>


<style>
    .align{
        display: flex;
        justify-content: space-around;
        /*spread out the divs*/
    
        margin-top: 5px;
        
    }

    .contact-form {
        align-items: center;
        width: 500px;
        margin: 0 auto;
        background: white;
        padding: 20px;
        margin: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
        background-color: #003e80;
    }
</style>
