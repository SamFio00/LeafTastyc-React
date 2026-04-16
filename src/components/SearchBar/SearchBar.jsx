import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.scss';

import { autocompleteRecipes } from '../../api/recipes';
import { getCache, setCache } from '../../utils/cache';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setSuggestions([]);
    navigate(`/results?query=${encodeURIComponent(query)}`);
  };

  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
  };

  useEffect(() => {
    const trimmed = query.trim();

    if (!trimmed) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSuggestions([]);
      return;
    }

    let active = true;

    const fetchSuggestions = async () => {
      const key = `auto_${trimmed.toLowerCase()}`;
      const maxAge = 1000 * 60 * 60;

      const cached = getCache(key, maxAge);

      if (cached && active) {
        setSuggestions(cached);
        return;
      }

      const data = await autocompleteRecipes(trimmed);

      if (!active) return;

      setSuggestions(data);
      setCache(key, data);
    };

    const timeout = setTimeout(fetchSuggestions, 400);

    return () => {
      active = false;
      clearTimeout(timeout);
    };
  }, [query]);

  const handleSelect = (title) => {
    setQuery('');
    setSuggestions([]);
    navigate(`/results?query=${encodeURIComponent(title)}`);
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
            <i className="fa-solid fa-xmark"></i>
          </button>
        )}

        <button type="submit" className="search-btn">
          Search
        </button>

        {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item) => (
            <li key={item.id} onClick={() => handleSelect(item.title)}>
              {item.title}
            </li>
          ))}
        </ul>
        )}

      </form>



    </div>
  );
}

export default SearchBar;