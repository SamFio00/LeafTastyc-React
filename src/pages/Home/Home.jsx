import Hero from '../../components/Hero/Hero';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import './Home.scss';
import { useEffect, useState } from 'react';
import { getRandomRecipes } from '../../api/recipes';
import { getCache, setCache } from '../../utils/cache';

const CACHE_KEY = 'home-random-recipes';
const CACHE_TIME = 60 * 60 * 1000;

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const cached = getCache(CACHE_KEY, CACHE_TIME);

      if (cached) {
        setRecipes(cached);
        return;
      }

      try {
        const data = await getRandomRecipes();

        setRecipes(data);

        setCache(CACHE_KEY, data);
        setCache('last-recipes', data);
      } catch {

        const fallback = getCache(CACHE_KEY, CACHE_TIME * 10);
        const lastGood = getCache('last-recipes', CACHE_TIME * 24);

        const finalData = fallback || lastGood;

        setRecipes(finalData ? finalData : []);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="home">
      <Hero />

      <section id="ideas" className="ideas-section">
        <h2>Some Ideas</h2>

        <div className="ideas-grid">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
          ) : (
            <div className="empty-state">
            <p>No recipes found. Spoonacular credits expired. Try again later</p>
            </div>
          )
          }
        </div>
      </section>
    </div>
  );
}

export default Home;