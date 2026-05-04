import { useEffect, useState } from "react";
import { getSuggestions } from "../api/recipes";
import { getCache, setCache } from "../utils/cache";

export const useDebouncedSearch = (query) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    const timeout = setTimeout(async () => {
      const trimmed = query.trim().toLowerCase();

      if (!trimmed) {
        if (active) {
          setSuggestions([]);
          setLoading(false);
          setError(null);
        }
        return;
      }

      const key = `auto_${trimmed}`;
      const CACHE_TIME = 60 * 60 * 1000;

      const cached = getCache(key, CACHE_TIME);

      if (cached && active) {
        setSuggestions(cached);
        setLoading(false);
        setError(null);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const data = await getSuggestions(trimmed);

        if (!active) return;

        const results = data || [];

        setSuggestions(results);
        setCache(key, results);
      } catch {
        if (!active) return;

        setSuggestions([]);
        setError("Error loading suggestions");
      } finally {
        if (active) setLoading(false);
      }
    }, 400);

    return () => {
      active = false;
      clearTimeout(timeout);
    };
  }, [query]);

  return { suggestions, loading, error };
};