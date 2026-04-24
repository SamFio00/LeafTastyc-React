import { useEffect, useState } from "react";
import { getRandomRecipes } from "../api/recipes";
import { getCache, setCache } from "../utils/cache";

const CACHE_KEY = "home-random-recipes";
const CACHE_TIME = 60 * 60 * 1000;

export const useRandomRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);

      const cached = getCache(CACHE_KEY, CACHE_TIME);

      if (cached) {
        setRecipes(cached);
        setLoading(false);
        return;
      }

      try {
        const data = await getRandomRecipes();

        setRecipes(data || []);
        setCache(CACHE_KEY, data || []);
        setCache("last-recipes", data || []);
      } catch {
        const fallback = getCache(CACHE_KEY, CACHE_TIME * 10);
        const lastGood = getCache("last-recipes", CACHE_TIME * 24);

        setRecipes(fallback || lastGood || []);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return { recipes, loading };
};