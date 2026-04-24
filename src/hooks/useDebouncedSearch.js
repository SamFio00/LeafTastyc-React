import { useEffect, useState } from "react";
import { getSuggestions } from "../api/recipes";
import { getCache, setCache } from "../utils/cache";

export const useDebouncedSearch = (query) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;

    const timeout = setTimeout(async () => {
      const trimmed = query.trim().toLowerCase();

      if (!trimmed) {
        if (active) {
          setSuggestions([]);
          setLoading(false);
        }
        return;
      }

      const key = `auto_${trimmed}`;
      const CACHE_TIME = 60 * 60 * 1000;

      const cached = getCache(key, CACHE_TIME);

      if (cached && active) {
        setSuggestions(cached);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        const data = await getSuggestions(trimmed);

        if (!active) return;

        const results = data || [];

        setSuggestions(results);
        setCache(key, results);
      } catch {
        if (active) setSuggestions([]);
      } finally {
        if (active) setLoading(false);
      }
    }, 400);

    return () => {
      active = false;
      clearTimeout(timeout);
    };
  }, [query]);

  return { suggestions, loading };
};