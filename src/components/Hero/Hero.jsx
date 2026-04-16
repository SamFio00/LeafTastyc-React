
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/icons/logo.svg";
import "./Hero.scss";

const Hero = () => {
    const handleScroll = () => {
        document.getElementById("ideas").scrollIntoView ({ behavior: "smooth" });
    };
    return (
        <div className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <img src={logo} alt="LeafTastyc Logo" />
                <SearchBar className="search-bar-hero" />
            </div>
                
                <button className="hero-scroll-btn" onClick={handleScroll}>
                    <i className="fa-regular fa-lightbulb"></i>
                </button>
        </div>
    );
};

export default Hero;