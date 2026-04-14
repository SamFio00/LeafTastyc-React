import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">

        <Link to="/" >
        <img src={logo} alt="logo LeafTastyc" />
        </Link>

        <SearchBar />

    </nav>
  );
}

export default Navbar;