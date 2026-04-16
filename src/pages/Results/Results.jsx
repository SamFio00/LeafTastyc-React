import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchRecipes } from '../../api/recipes';
import { getCache, setCache } from '../../utils/cache';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Navbar from '../../components/Navbar/Navbar';
import './Results.scss';

function Results() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';

  const [recipes, setRecipes] = useState([]);
  const [offset, setOffset] = useState(0);

  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      const CACHE_KEY = `results_${query}_0`;
      const CACHE_TIME = 60 * 60 * 1000;

      const cached = getCache(CACHE_KEY, CACHE_TIME);
      if (cached) {
        setRecipes(cached);
        setOffset(10);
        setHasMore(cached.length >= 10);
        return;
      }

      setLoading(true);

      const results = await searchRecipes(query, 10, 0);

      setRecipes(results);
      setOffset(10);
      setHasMore(results.length >= 10);

      setCache(CACHE_KEY, results);

      setLoading(false);
    };

    if (query) fetchRecipes();
  }, [query]);

  const loadMore = async () => {
    const CACHE_KEY = `results_${query}_${offset}`;
    const CACHE_TIME = 60 * 60 * 1000;

    const cached = getCache(CACHE_KEY, CACHE_TIME);

    if (cached) {
      setRecipes((prev) => [...prev, ...cached]);
      setOffset((prev) => prev + 10);
      setHasMore(cached.length >= 10);
      return;
    }

    setLoadingMore(true);

    const moreRecipes = await searchRecipes(query, 10, offset);

    setRecipes((prev) => [...prev, ...moreRecipes]);
    setOffset((prev) => prev + 10);
    setHasMore(moreRecipes.length >= 10);

    setCache(CACHE_KEY, moreRecipes);

    setLoadingMore(false);
  };

  return (
    <>
      <Navbar />

      <div className="results">
        <h2>Results for: <em>{query}</em></h2>

        <div className="results-list">
          {loading ? (
            <div className="loader"></div>
          ) : recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <div className="no-results">
              <i className="fa-solid fa-triangle-exclamation"></i>
              <p>No recipes found.</p>
            </div>
          )}
        </div>

        {!loading && recipes.length > 0 && hasMore && (
          <button
            className="load-more"
            onClick={loadMore}
            disabled={loadingMore}
          >
            {loadingMore ? (
              'Loading...'
            ) : (
              <>
                Load more <i className="fa-solid fa-arrow-down"></i>
              </>
            )}
          </button>
        )}

        {!hasMore && !loading && recipes.length > 0 && (
          <h2 className="end-message">No more recipes</h2>
        )}
      </div>
    </>
  );
}

export default Results;