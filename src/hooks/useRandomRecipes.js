import { useEffect, useState } from "react";
import { getRandomRecipes } from "../api/recipes";
import { getCache, setCache } from "../utils/cache";

const CACHE_KEY = "home-random-recipes";
const CACHE_TIME = 60 * 60 * 1000;

export const useRandomRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);

    const cached = getCache(CACHE_KEY, CACHE_TIME);

    if (cached) {
      setRecipes(cached);
    }

    try {

      const data = await getRandomRecipes();

      const recipesData = data || [];

      setRecipes(recipesData);
      setCache(CACHE_KEY, recipesData);
      setCache("last-recipes", recipesData);
    } catch {

      setError("Unable to load new random recipes.");

      const fallback = getCache(CACHE_KEY, CACHE_TIME * 10);
      const lastGood = getCache("last-recipes", CACHE_TIME * 24);


      if (!cached) {
        setRecipes(fallback || lastGood || []);
      }
    } finally {
      setLoading(false);
    }
  };

  fetchRecipes();
}, []);

  return { recipes, loading, error };
};