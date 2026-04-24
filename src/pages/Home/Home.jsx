import Hero from '../../components/Hero/Hero';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import './Home.scss';
import { useRandomRecipes } from '../../hooks/useRandomRecipes';

function Home() {
  const { recipes, loading } = useRandomRecipes();

  return (
    <div className="home">
      <Hero />

      <section id="ideas" className="ideas-section">
        <h2>Some Ideas</h2>

        <div className="ideas-grid">
          {loading ? (
            <div className="loader"></div>
          ) : recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <div className="empty-state">
              <p>No recipes available right now. Try again later.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;