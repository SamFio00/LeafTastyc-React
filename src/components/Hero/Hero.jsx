
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/icons/logo.svg";
import "./Hero.scss";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <img src={logo} alt="LeafTastyc Logo" />
                <SearchBar className="search-bar-hero" />
            </div>
        </div>
    );
};

export default Hero;