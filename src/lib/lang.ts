import { writable } from 'svelte/store';

export const langs = [
	{
		lang: 'Nederlands',
		welcome:
			"Welkom op de website van de concertfotograaf Marc de Krosse!<br/> Op deze site kan je zijn geweldige foto's zien en kopen!",
		concertPhotographer: 'Concertfotograaf',

		pages: {
			home: 'Home',
			about: 'Over',
			contact: 'Contact',
			pictures: "Concertfoto's",
			buy: "Kopen",
			publications: 'Publicaties'
		},

		contact: {
			title: 'Neem zelf contact op met Marc',
			name: 'Naam',
			email: 'E-mail',
			message: 'Bericht',
			send: 'Verstuur',
			phone: 'Telefoonnummer',
			address: 'Adres'
		},

		notFound: {
			title: 'Pagina niet gevonden :(',
			message:
				'De pagina die je zocht bestaat (nog) niet. Probeer het opnieuw of ga naar de homepage.'
		},

		about: {
			first: `VERA is hèt centrum voor de Popcultuur in Groningen, ook wel omschreven als: Club for the
			International Pop Underground. We waren ooit een keurige studentenvereniging, en daar komt de
			naam ook vandaan: Veri Et Recti Amici (Ware En Oprechte Vrienden). Anno nu is het een
			volwaardig concertpodium. Vele bands, die later soms wereldberoemd werden, hebben hier ooit
			gestaan, zoals: U2, Joy Division, Simple Minds, Nick Cave, Henry Rollins, Sonic Youth,
			Soundgarden, Slayer, Nirvana, Pearl Jam, Weezer, The White Stripes, At The Drive-in, Mogwai,
			Franz Ferdinand, Editors, Interpol, Elbow, The Hives, Triggerfinger, Nothing But Thieves, Dua
			Lipa e.v.a.`,
			secondAnnouncement: 'Met de neus op de band!',
			second: `Vera heeft sinds 2001 een foto-groep. Vrijwilligers fotograferen elk concert. Marc de Krosse
			is er van het begin af aan bij. "Ik sta het liefst met mijn neus op de band. Daarom
			fotografeer ik graag de kleine concerten in de Kelderbar. Ik probeer de energie van zo'n band
			terug te laten komen in zo'n foto. Dat je de beweging ziet en het zweet van de band op de
			camera voelt. Zoals het optreden van Loud Squirt. Dat was geweldig." "Professionele fotografen
			bij grote concerten moeten vaak na de eerste drie nummers weer weg. Wij blijven een heel
			optreden, dan heb je ook de bezwete hoofden aan het einde. Daar gebeurt veel meer dan aan het
			begin." We stellen ons altijd van tevoren netjes voor aan de band, vragen toestemming om te
			fotograferen. In die veertien jaar heb ik één keer meegemaakt dat een band niet wilde."`
		},

		footer: {
			school: 'Schoolopdracht'
		},

		sort: {
			search: 'Zoeken',
			prefix: "Sorteer op ",
			title: 'titel',
			date: 'datum',
			ascending: 'Oplopend',
			descending: 'Aflopend'
		}
	},
	{
		lang: 'English',
		welcome:
			'Welcome to the website of the concert photographer Marc de Krosse!<br/> On this site you can see and buy his great photos!',
		concertPhotographer: 'Concert Photographer',
		pages: {
			home: 'Home',
			about: 'About',
			contact: 'Contact',
			pictures: 'Pictures',
			buy: "Buy",
			publications: 'Publications'
		},

		contact: {
			title: 'Contact Marc',
			name: 'Name',
			email: 'Email',
			message: 'Message',
			send: 'Send',
			phone: 'Phone number',
			address: 'Address'
		},

		notFound: {
			title: 'Page not found :(',
			message: 'The page you are looking for does not exist (yet). Try again or go to the homepage.'
		},

		about: {
			first: `VERA is the centre for pop culture in Groningen, also described as: Club for the
International Pop Underground. We used to be a decent student association, and that is where the
name comes from: Veri Et Recti Amici (True and Sincere Friends). Nowadays it is a
fully-fledged concert venue. Many bands, who later sometimes became world-famous, have
performed here, such as: U2, Joy Division, Simple Minds, Nick Cave, Henry Rollins, Sonic Youth,
Soundgarden, Slayer, Nirvana, Pearl Jam, Weezer, The White Stripes, At The Drive-in, Mogwai,
Franz Ferdinand, Editors, Interpol, Elbow, The Hives, Triggerfinger, Nothing But Thieves, Dua
Lipa and many others.`,
			secondAnnouncement: 'With your nose to the band!',
			second: `Vera has had a photo group since 2001. Volunteers photograph every concert. Marc de Krosse
has been there from the start. "I prefer to be right up close to the band. That's why
I like to photograph the small concerts in the Kelderbar. I try to capture the energy of such a band
in such a photo. That you see the movement and feel the sweat of the band on the
camera. Like the performance of Loud Squirt. That was great." "Professional photographers
at large concerts often have to leave after the first three songs. We stay for the entire
performance, so you also have sweaty heads at the end. Much more happens there than at the
beginning." We always properly introduce ourselves to the band in advance, ask permission to
take pictures. In those fourteen years, I have only experienced one time that a band
did not want to."`
		},

		footer: {
			school: 'School assignment'
		},

		sort: {
			search: 'Search',
			prefix: "Sort by ",
			title: 'title',
			date: 'date',
			ascending: 'Ascending',
			descending: 'Descending'
		}
	},

];

export const lang = writable(langs[0]);
