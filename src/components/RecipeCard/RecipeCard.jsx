import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './RecipeCard.scss';

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/recipe-details/${recipe.id}`);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })

  const cleanText = recipe.summary?.replace(/<[^>]+>/g, '');

  const shortText = cleanText?.slice(0, 130);
  const longText = cleanText?.slice(0, 500);

  const description = isMobile ? shortText : longText;

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-content">
      <h3>{recipe.title}</h3>
      <p>
        {description
          ? description + '...'
          : 'No description available.'}
      </p>
      <button onClick={goToDetails}>See Details →</button>
      </div>
    </div>
  );
}

export default RecipeCard;