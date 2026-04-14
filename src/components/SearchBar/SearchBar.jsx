import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.scss';

function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/results?query=${encodeURIComponent(query)}`);
  };

  return (
    <form className={"search-bar ${className}" } onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search vegetarian recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;