import "./RecipeDetails.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useRecipeDetails } from "../../hooks/useRecipeDetails";

const RecipeDetails = () => {
  const { id } = useParams();

  const { recipe, loading, error } = useRecipeDetails(id);

  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="loader"></div>
      </>
    );
  }

  if (error || !recipe) {
    return (
      <>
        <Navbar />
        <div className="error-recipe-details">
          <i className="fa-solid fa-triangle-exclamation"></i>
          <p>Recipe details failed to load</p>
          <button className="back-btn-fail" onClick={() => window.history.back()}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="recipe-details">
        <button
          className="back-btn"
          onClick={() => window.history.back()}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <div className="hero-image">
          <img src={recipe.image} alt={recipe.title} />
          <div className="image-overlay"></div>

          <div className="badges-overlay">
            <span>
              <i className="fa-solid fa-utensils"></i> {recipe.servings}
            </span>

            <span>
              <i className="fa-solid fa-clock"></i> {" "}
              {recipe.readyInMinutes} min
            </span>

            {recipe.pricePerServing && (
              <span>
                <i className="fa-solid fa-coins"></i> {" "}
                {(recipe.pricePerServing / 100).toFixed(2)}€
              </span>
            )}

            {recipe.spoonacularScore && (
              <span>
                <i className="fa-solid fa-star"></i> {" "}
                {Math.round(recipe.spoonacularScore)}
              </span>
            )}
          </div>
        </div>

        <h1 className="title">{recipe.title}</h1>

        <p className="summary">
          {recipe.summary?.replace(/<[^>]+>/g, "")}
        </p>

        <div className="grid">
          <div className="ingredients">
            <h2>Ingredients</h2>

            <ul className="ingredients-list">
              {recipe.extendedIngredients?.map((ing) => {
                const isChecked = checkedItems[ing.id];

                return (
                  <li
                    key={ing.id}
                    className={isChecked ? "checked" : ""}
                    onClick={() => toggleItem(ing.id)}
                  >
                    <div className="checkbox">
                      <i className="fa-solid fa-check"></i>
                    </div>

                    <span className="text">
                      {ing.original}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="info-box">
            <h2>Quick Info</h2>

            <p>
              <i className="fa-solid fa-heart"></i> Health Score:{" "}
              {recipe.healthScore}
            </p>

            <p>
              <i className="fa-solid fa-dumbbell"></i> Nutrition Level:{" "}
              {recipe.healthScore > 80
                ? "Excellent"
                : recipe.healthScore > 60
                ? "Good"
                : "Average"}
            </p>

            <p>
              <i className="fa-solid fa-scale-balanced"></i> Fat Level:{" "}
              {recipe.veryHealthy ? "Low" : "Moderate"}
            </p>

            <p>
              <i className="fa-solid fa-leaf"></i> Diet Type:{" "}
              {recipe.vegan
                ? "Vegan"
                : recipe.dairyFree
                ? "Dairy Free"
                : "Vegetarian"}
            </p>

            {recipe.glutenFree && (
              <p>
                <i className="fa-solid fa-circle-info"></i> Gluten Free
              </p>
            )}

            <p>
              <i className="fa-solid fa-stairs"></i> Difficulty:{" "}
              {recipe.readyInMinutes < 20
                ? "Easy"
                : recipe.readyInMinutes < 50
                ? "Medium"
                : "Hard"}
            </p>
          </div>
        </div>

        <div className="instructions">
          <h2>Instructions</h2>

          <div
            className="instructions-content"
            dangerouslySetInnerHTML={{
              __html: recipe.instructions,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;