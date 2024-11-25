
import { writable } from "svelte/store";

export const langs = [
  {
    lang: "Nederlands",
    welcome: "Welkom op de website van het fotofenomeen Marc de Krosse! Op deze site kan je zijn geweldige foto's zien en kopen!",
    concertPhotographer: "Concertfotograaf",

    pages: {
      home: "Home",
      about: "Over",
      contact: "Contact",
      pictures: "Concertfoto's",
      publications: "Publicaties"
    }
   },
  {
lang: "English",
welcome: "Welcome to the website of the photo phenomenon Marc de Krosse! On this site you can see and buy his great photos!",
concertPhotographer: "Concert Photographer",
pages: {
  home: "Home",
  about: "About",
  contact: "Contact",
  pictures: "Pictures",
  publications: "Publications"
}
  },
  {
    lang: "Suomi",
    welcome: "Tervetuloa valokuvailmiön Marc de Krosse sivuille! Tällä sivustolla voit nähdä ja ostaa hänen upeita kuviaan!",
    concertPhotographer: "Concert Photographer",
    pages: {
      home: "Koti",
      about: "Tietoja",
      contact: "Yhteystiedot",
      pictures: "Kuvat",
      publications: "Julkaisut"
    }
  } 
]

export const lang = writable(langs[0]);