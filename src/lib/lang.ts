
import { writable } from "svelte/store";

export const langs = [
  {
    lang: "Nederlands",
    welcome: "Welkom!"
   },
  {
lang: "English",
welcome: "Welcome!"
  },
  {
    lang: "Suomi",
    welcome: "Tervetuloa!"
  } 
]

export const lang = writable(langs[0]);