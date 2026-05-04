import { useEffect, useState } from "react";
import { searchRecipes } from "../api/recipes";
import { getCache, setCache } from "../utils/cache";

export const useRecipes = (query) => {
  const [recipes, setRecipes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchRecipes = async () => {
      const CACHE_KEY = `results_${query}_0`;
      const CACHE_TIME = 60 * 60 * 1000;

      setLoading(true);
      setError(null);

      const cached = getCache(CACHE_KEY, CACHE_TIME);

      if (cached) {
        setRecipes(cached);
        setOffset(10);
        setHasMore(cached.length >= 10);
        setLoading(false);
        return;
      }

      try {
        const results = await searchRecipes(query, 10, 0);

        setRecipes(results);
        setOffset(10);
        setHasMore(results.length >= 10);

        setCache(CACHE_KEY, results);
      } catch {
        setError("Failed to load recipes.");
        setRecipes([]);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);

  const loadMore = async () => {
    const CACHE_KEY = `results_${query}_${offset}`;
    const CACHE_TIME = 60 * 60 * 1000;

    setLoadingMore(true);

    const cached = getCache(CACHE_KEY, CACHE_TIME);

    if (cached) {
      setRecipes((prev) => [...prev, ...cached]);
      setOffset((prev) => prev + 10);
      setHasMore(cached.length >= 10);
      setLoadingMore(false);
      return;
    }

    try {
      const moreRecipes = await searchRecipes(query, 10, offset);

      setRecipes((prev) => [...prev, ...moreRecipes]);
      setOffset((prev) => prev + 10);
      setHasMore(moreRecipes.length >= 10);

      setCache(CACHE_KEY, moreRecipes);
    } catch {
      setError("Failed to load more recipes.");
    } finally {
      setLoadingMore(false);
    }
  };

  return {
    recipes,
    loading,
    loadingMore,
    hasMore,
    loadMore,
    error,
  };
};