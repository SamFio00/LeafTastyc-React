import { useEffect, useState } from "react";
import { getRecipeDetails } from "../api/recipes";
import { getCache, setCache } from "../utils/cache";

export const useRecipeDetails = (id) => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const CACHE_KEY = `recipe_${id}`;
      const CACHE_TIME = 60 * 60 * 1000 * 24;

      try {
        setLoading(true);
        setError(null);

        const cached = getCache(CACHE_KEY, CACHE_TIME);

        if (cached) {
          setRecipe(cached);
          setLoading(false);
          return;
        }

        const data = await getRecipeDetails(id);

        if (!data) throw new Error("No data");

        setRecipe(data);
        setCache(CACHE_KEY, data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { recipe, loading, error };
};