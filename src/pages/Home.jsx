import React from 'react';
import SearchBar from '../components/SearchBar';
import Logo from '../components/Logo';
import '../style/main.scss'; 
import recipe1 from '../assets/images/fake-recipe.jpg';
import recipe2 from '../assets/images/fake-recipe.jpg';
import recipe3 from '../assets/images/fake-recipe.jpg';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <Logo />
          <SearchBar />
        </div>
      </section>

      <section className="ideas-section">
        <h2>Some Ideas</h2>
        <div className="ideas-grid">
        <div className="recipe-card">
            <img src={recipe1} alt="Recipe 1" />
            <h3>Veggie Burger</h3>
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

      <footer>
        {/* Footer semplice per ora */}
        <p>©2026 Samuele Fiorini</p>
      </footer>
    </div>
  );
}

export default Home;