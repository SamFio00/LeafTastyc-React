import axios from 'axios';

const API_KEY = '50287f47cda14617859ec1dc6fd626fd';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const searchRecipes = async (query, number = 10, offset = 0) => {
  try {
    const res = await axios.get(`${BASE_URL}/complexSearch`, {
      params: {
        apiKey: API_KEY,
        query,
        diet: 'vegetarian',
        number,
        offset,
        addRecipeInformation: true,
      },
    });

    return res.data.results;
  } catch (err) {
    console.error('Search error:', err);
    return [];
  }
};


export const getRecipeDetails = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/${id}/information`, {
      params: {
        apiKey: API_KEY,
      },
    });

    return res.data;
  } catch (err) {
    console.error('Details error:', err);
    return null;
  }
};

export const getRandomRecipes = async () => {
  const res = await axios.get(`${BASE_URL}/random`, {
    params: {
      apiKey: API_KEY,
      number: 3,
      tags: 'vegetarian',
    },
  });

  return res.data.recipes;

};

export const autocompleteRecipes = async (query) => {
  if (!query) return [];

  const res = await axios.get(`${BASE_URL}/autocomplete`, {
    params: {
      apiKey: API_KEY,
      query,
      number: 5,
    },
  });

  return res.data;
};