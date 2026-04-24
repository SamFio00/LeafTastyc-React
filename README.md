<p align="center">
  <a href="https://leaftastyc.netlify.app/" target="_blank">
    <img src="https://image.thum.io/get/width/900/https://leaftastyc.netlify.app" alt="LeafTastyc Preview" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Sass-SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
  <img src="https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" />
</p>

# LeafTastyc - Vegetarian Recipes App

LeafTastyc è una web app sviluppata in **React** che permette di cercare ricette vegetariane, visualizzare i dettagli e ottenere idee casuali per la cucina.

Il progetto nasce con l’obiettivo di approfondire lo sviluppo frontend moderno, la gestione delle API e l’ottimizzazione delle performance tramite cache e debounce.

---

## Demo

https://leaftastyc.netlify.app/

---

## Funzionalità

- Ricerca ricette tramite API Spoonacular
- Suggerimenti in tempo reale con autocomplete
- Pagina dettagli ricetta
- Sezione idee casuali nella homepage
- Sistema di cache per ridurre le chiamate API
- Paginazione con "load more"
- Ricerca debounced per ottimizzazione performance
- Layout completamente responsive

---

## Tecnologie utilizzate

- React (Vite)
- React Router DOM
- JavaScript (ES6+)
- SCSS (Sass)
- Axios
- Spoonacular API
- Netlify (deploy)

---

## Componenti principali

### Navbar
Barra di navigazione sticky con logo e search bar integrata.

### Hero
Sezione principale della homepage con immagine di background, search bar e scroll button.

### SearchBar
Input con ricerca debounced e suggerimenti in tempo reale.

### RecipeCard
Card riutilizzabile per la visualizzazione delle ricette.

### Footer
Sezione con link social e copyright.

---

## Custom hooks

### useRecipes
Gestione ricerca ricette, paginazione e cache.

### useRandomRecipes
Gestione ricette casuali per homepage.

### useRecipeDetails
Recupero dettagli singola ricetta con caching.

### useDebouncedSearch
Gestione ricerca con debounce e suggerimenti.

---

## Logica dell’applicazione

- Fetch dati da API Spoonacular
- Cache locale per ridurre chiamate API
- Debounce per ottimizzare richieste
- Routing con React Router
- Stato gestito con hooks

---

## Stile e UI

- Design moderno e pulito
- Palette verde naturale
- Animazioni leggere
- Layout responsive
- Glassmorphism navbar

---

## Autore

© 2026 — Samuele Fiorini

GitHub: https://github.com/SamFio00  
LinkedIn: https://www.linkedin.com/in/samuele-fiorini-38bba9325  
Instagram: https://www.instagram.com/fiorini_sam_00
