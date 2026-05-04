import { useNavigate } from 'react-router-dom';
import fakeRecipe from '../../assets/images/fake-recipe.jpg';
import './RecipeCard.scss';

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  // Function to navigate to recipe details
  const goToDetails = () => {
    navigate(`/recipe-details/${recipe.id}`);
  };

  const description = recipe.summary?.replace(/<[^>]+>/g, '');

  return (
    <div className="recipe-card">
      <img
        src={recipe.image || fakeRecipe }
        alt={recipe.title}
      />

      <div className="recipe-content">
        <h3>{recipe.title}</h3>

        <p>
          {description || 'No description available.'}
        </p>

        <button onClick={goToDetails}>
          See Details →
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;