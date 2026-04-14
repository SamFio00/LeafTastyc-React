import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchRecipes } from '../../api/recipes';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Navbar from '../../components/Navbar/Navbar';
import './Results.scss';

function Results() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const results = await searchRecipes(query, 10);
      setRecipes(results);
    };
    if (query) fetchRecipes();
  }, [query]);

  return (
    <>
    <Navbar />
    <div className='lorem-example'>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis libero dolor error asperiores minima quibusdam dignissimos veniam optio, laborum ab eligendi distinctio! Eveniet unde eligendi aperiam magni ducimus dolore ipsam.</p>
      <img src="https://picsum.photos/200/300" alt="placeholder from internet" />
      <img src="https://picsum.photos/200/300" alt="placeholder from internet" />
      <img src="https://picsum.photos/200/300" alt="placeholder from internet" />
      <img src="https://picsum.photos/200/300" alt="placeholder from internet" />
      <img src="https://picsum.photos/200/300" alt="placeholder from internet" />
      <img src="https://picsum.photos/200/300" alt="placeholder from internet" />
      <img src="https://picsum.photos/200/300" alt="placeholder from internet" />
      <img src="https://picsum.photos/200/300" alt="placeholder from internet" />
      </div>
    <div className="results">
      <h2>Results for: {query}</h2>
      <div className="results-list">
        {recipes.length > 0 ? (
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
    </div>
    </>
  );
}

export default Results;