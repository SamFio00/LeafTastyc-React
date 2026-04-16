import React from 'react';
import Hero from '../../components/Hero/Hero';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import './Home.scss';
import { useEffect, useState } from 'react';
import { getRandomRecipes } from '../../api/recipes';
import { getCache, setCache } from '../../utils/cache'; 

function Home() {

    const [recipes, setRecipes] = useState([]);

    const CACHE_KEY = 'home-random-recipes';
    const CACHE_TIME = 60 * 60 * 1000;

    useEffect(() => {
  const fetchRecipes = async () => {
    const cached = getCache(CACHE_KEY, CACHE_TIME);

        if (cached) {
        setRecipes(cached);
        return;
        }

        const data = await getRandomRecipes();

        setRecipes(data);
        setCache(CACHE_KEY, data);
    };

    fetchRecipes();
    }, []);
    
  return (
    <div className="home">

      <Hero />

      <section id="ideas" className="ideas-section">
        <h2>Some Ideas</h2>
        <div className="ideas-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;