import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">

        <div className="nav-logo">
        <Link to="/" >
        <img src={logo} alt="logo LeafTastyc" />
        </Link>
        </div>

        <div className="nav-search-bar">
        <SearchBar />
        </div>

    </nav>
  );
}

export default Navbar;