import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch(''); // Show all products
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="btn-search">
        🔍 Search
      </button>
      {searchTerm && (
        <button type="button" onClick={handleClear} className="btn-clear">
          ✖️ Clear
        </button>
      )}
    </form>
  );
};

export default SearchBar;
