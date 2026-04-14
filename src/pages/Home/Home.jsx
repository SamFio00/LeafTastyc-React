import React from 'react';
import Hero from '../../components/Hero/Hero';
import './Home.scss'; 
import recipe1 from '../../assets/images/fake-recipe.jpg';
import recipe2 from '../../assets/images/fake-recipe.jpg';
import recipe3 from '../../assets/images/fake-recipe.jpg';
function Home() {
  return (
    <div className="home">

      <Hero />

      <section className="ideas-section">
        <h2>Some Ideas</h2>
        <div className="ideas-grid">
        <div className="recipe-card">
            
            <img src={recipe1} alt="Recipe 1" />
            <h3><i className="fa-solid fa-plate-wheat"></i> Veggie Burger</h3>
            <button>See Details →</button>
        </div>

        <div className="recipe-card">
            <img src={recipe2} alt="Recipe 2" />
            <h3>Quinoa Salad</h3>
            <button>See Details →</button>
        </div>

        <div className="recipe-card">
            <img src={recipe3} alt="Recipe 3" />
            <h3>Vegan Pancakes</h3>
            <button>See Details →</button>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Home;