import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    apiKey: import.meta.env.VITE_API_KEY,
  },
});

//SEARCH RECIPES
export const searchRecipes = async (query, number = 10, offset = 0) => {
  try {
    const { data } = await api.get('/complexSearch', {
      params: {
        query,
        diet: 'vegetarian',
        number,
        offset,
        addRecipeInformation: true,
      },
    });

    return data.results || [];
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
};

//DETAILS
export const getRecipeDetails = async (id) => {
  try {
    const { data } = await api.get(`/${id}/information`);
    return data;
  } catch (error) {
    console.error('Details error:', error);
    return null;
  }
};

//RANDOM
export const getRandomRecipes = async () => {
  try {
    const { data } = await api.get('/random', {
      params: {
        number: 3,
        tags: 'vegetarian',
      },
    });

    return data.recipes || [];
  } catch (error) {
    console.error('Random error:', error);
    return [];
  }
};