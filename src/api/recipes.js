import axios from 'axios';

const API_KEY = '50287f47cda14617859ec1dc6fd626fd';
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';

export const searchRecipes = async (query, number = 10) => {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
        query,
        diet: 'vegetarian',
        number,
        addRecipeInformation: true,
      },
    });
    return res.data.results; // array di ricette
  } catch (err) {
    console.error('Errore nella ricerca:', err);
    return [];
  }
};