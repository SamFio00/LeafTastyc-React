import React from 'react';
import { useNavigate } from 'react-router-dom';

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const goToDetails = () => {
    // porta alla pagina dei dettagli usando l'id della ricetta
    navigate(`/recipe-details/${recipe.id}`);
  };

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <button onClick={goToDetails}>See Details</button>
    </div>
  );
}

export default RecipeCard;