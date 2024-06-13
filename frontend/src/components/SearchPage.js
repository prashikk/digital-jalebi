import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(`http://localhost:8000/api/companies/search?query=${query}`);
    setResults(response.data);
  };

  return (
    <div className="container">
      <h1>Search Companies</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((company) => (
          <li key={company._id}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
