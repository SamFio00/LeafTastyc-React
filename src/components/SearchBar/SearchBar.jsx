import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.scss';
import { useDebouncedSearch } from '../../hooks/useDebouncedSearch';

function SearchBar() {
  const [query, setQuery] = useState('');

  const { suggestions, loading } = useDebouncedSearch(query);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/results?query=${encodeURIComponent(query.trim())}`);
  };

  const clearSearch = () => {
    setQuery('');
  };

  const handleSelect = (title) => {
    setQuery('');
    navigate(`/results?query=${encodeURIComponent(title.trim())}`);
  };

  return (
    <div className="search-wrapper">
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          placeholder="Search vegetarian recipes..."
          onChange={(e) => setQuery(e.target.value)}
        />

        {query && (
          <button type="button" className="clear-btn" onClick={clearSearch}>
            ✕
          </button>
        )}


        <button type="submit" className="search-btn">
          Search
        </button>

        {(loading || suggestions.length > 0) && (
          <ul className="suggestions">
            {loading ? (
              <li className="loading-item">
                <div className="mini-loader"></div>
              </li>
            ) : (
              suggestions.map((item) => (
                <li key={item.id} onClick={() => handleSelect(item.title)}>
                  {item.title}
                </li>
              ))
            )}
          </ul>
        )}
      </form>
    </div>
  );
}

export default SearchBar;