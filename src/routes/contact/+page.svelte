<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { lang } from '$lib/lang';
	import { enhance } from '$app/forms';
	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<div class="align">
	<div class="item">
		<div class="contact-form">
			<form method="POST" use:enhance>
				<label for="name">{$lang.contact.name}</label>
				<input type="text" id="name" name="name" required />
				<label for="email">{$lang.contact.email}</label>
				<input type="email" id="email" name="email" required />
				<label for="message">{$lang.contact.message}</label>
				<textarea id="message" name="message" rows="4" required></textarea>
				<button type="submit">{$lang.contact.send}</button>
				{#if form?.message}
					<p>{form.message}</p>
				{/if}
			</form>
		</div>

		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.0456978399156!2d6.567531077062047!3d53.21702898439117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c9cd56c4852557%3A0xe2ed17b9050edcc5!2sVera!5e0!3m2!1sen!2snl!4v1733473891996!5m2!1sen!2snl"
			title="Google Maps"
			style="border:0;"
			allowfullscreen={true}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			class="maps"
		></iframe>
	</div>
	<div class="item text">
		<h1>Neem Zelf Contact Op Met Marc</h1>
		<p>
			E-mailadres: marcdekrosse@heetmail.kom
			<br />
			Telefoonnummer: +31 6 12345678
			<br />
			Adres: Oosterstraat 44, Groningen, Nederland
		</p>
	</div>
</div>

<style>
	.maps {
		margin-left: 20px;
		border-radius: 8px;
		height: 200px;
		width: 90%;
	}
	.align {
		display: flex;
		justify-content: center;
		margin-top: 5px;
	}

	.contact-form {
		align-items: center;
		margin: 0 auto;
		background: white;
		padding: 20px;
		margin: 20px;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		color: black;
	}
	label {
		display: block;
		margin-bottom: 5px;
		font-weight: bold;
	}
	input,
	textarea {
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 95%;
		margin-bottom: 15px;
	}
	button {
		padding: 12px 25px;
		background-color: #014fa3;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	button:hover {
		background-color: #003e80;
	}

	@media (max-width: 1100px) {
		.align {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.item {
			margin: 10px;
			width: 90%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.maps {
			margin-left: 0px;
		}

		.text {
			text-align: center;
		}
	}

	.item {
		color: white;
	}
</style>
