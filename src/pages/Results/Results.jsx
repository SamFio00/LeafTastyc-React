import { useLocation } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Navbar from "../../components/Navbar/Navbar";
import "./Results.scss";

import { useRecipes } from "../../hooks/useRecipes";

function Results() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const {
    recipes,
    loading,
    loadingMore,
    hasMore,
    loadMore,
  } = useRecipes(query);

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