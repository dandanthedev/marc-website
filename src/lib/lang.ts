
import { writable } from "svelte/store";

export const langs = [
  {
    lang: "nl",
    welcome: "welkom!"
   },
  {
lang: "en",
welcome: "welcome!"
  }
]

export const lang = writable(langs[0]);