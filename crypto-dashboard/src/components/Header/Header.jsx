// // 

// import React, { useState } from 'react';
// import './Header.css';

// const Header = ({ cryptoData, stockData, onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   // Combine crypto and stock symbols for autocomplete
//   const allSymbols = [
//     ...(cryptoData?.map((crypto) => ({ type: 'Crypto', symbol: crypto.symbol, name: crypto.name })) || []),
//     ...(stockData?.map((stock) => ({ type: 'Stock', symbol: stock.symbol, name: stock.name })) || []),
//   ];

//   // Update suggestions based on search term
//   const handleSearchChange = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     if (term) {
//       const filteredSuggestions = allSymbols.filter(
//         (item) =>
//           item.symbol.toLowerCase().includes(term.toLowerCase()) ||
//           item.name.toLowerCase().includes(term.toLowerCase())
//       );
//       setSuggestions(filteredSuggestions);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   // Handle search button click
//   const handleSearch = () => {
//     onSearch(searchTerm);
//     setSearchTerm('');
//     setSuggestions([]);
//   };

//   // Handle clicking a suggestion
//   const handleSuggestionClick = (symbol) => {
//     setSearchTerm(symbol);
//     setSuggestions([]);
//   };

//   return (
//     <header className="main-header">
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search assets..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="search-input"
//         />
//         <button className="search-button" onClick={handleSearch}>
//           🔍
//         </button>
//         {suggestions.length > 0 && (
//           <ul className="suggestions-list">
//             {suggestions.map((item, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleSuggestionClick(item.symbol)}
//               >
//                 {item.symbol} ({item.name}) - {item.type}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <div className="user-menu">
//         <span className="notifications">🔔</span>
//         <span className="user-avatar">👤</span>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import './Header.css';

const Header = ({ cryptoData, stockData, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Combine crypto and stock symbols for autocomplete
  const allSymbols = [
    ...(cryptoData?.map((crypto) => ({ type: 'Crypto', symbol: crypto.symbol, name: crypto.name })) || []),
    ...(stockData?.map((stock) => ({ type: 'Stock', symbol: stock.symbol, name: stock.name })) || []),
  ];

  // Update suggestions based on search term
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term) {
      const filteredSuggestions = allSymbols.filter(
        (item) =>
          item.symbol.toLowerCase().includes(term.toLowerCase()) ||
          item.name.toLowerCase().includes(term.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle search button click
  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm('');
    setSuggestions([]);
  };

  // Handle clicking a suggestion
  const handleSuggestionClick = (symbol) => {
    setSearchTerm(symbol);
    setSuggestions([]);
  };

  return (
    <header className="main-header">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search assets..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button className="search-button" onClick={handleSearch}>
          🔍
        </button>
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(item.symbol)}
              >
                {item.symbol} ({item.name}) - {item.type}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="user-menu">
        <span className="notifications">🔔</span>
        <span className="user-avatar">👤</span>
      </div>
    </header>
  );
};

export default Header;