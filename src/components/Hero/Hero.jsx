import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/icons/logo.svg";
import "./Hero.scss";

const Hero = () => {

    // Scroll to ideas section
    const handleScroll = () => {
        const el = document.getElementById("ideas");
        el?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <img src={logo} alt="LeafTastyc Logo" />
                <SearchBar />
            </div>
                
                <button 
                    className="hero-scroll-btn"
                    aria-label="Scroll to ideas section" 
                    onClick={handleScroll}>
                    <i className="fa-regular fa-lightbulb"></i>
                </button>
        </section>
    );
};

export default Hero;