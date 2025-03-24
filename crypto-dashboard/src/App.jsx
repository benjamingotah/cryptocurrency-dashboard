import React, { useState, useEffect } from 'react';
import { Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchCryptoData } from './services/cryptoApi.jsx';
import { fetchStockData } from './services/stockApi.jsx'; // Correct import
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Header from './components/Header/Header';
import CryptoMarket from './components/CryptoMarket/CryptoMarket.jsx';
import StockMarket from './components/StockMarket/StockMarket.jsx';
import Watchlist from './components/Watchlist/Watchlist.jsx';
import News from './components/News/News.jsx';
import './App.css';


const App = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(' ');

  useEffect(() => {
    const fetchData = async () => {
      const crypto = await fetchCryptoData();
      const stocks = await fetchStockData();
      setCryptoData(crypto);
      setStockData(stocks);
      setIsLoading(false);
    };

    fetchData();
  }, []);

    const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Implement search logic here (e.g., filter data or navigate to a specific asset page)
    console.log('Search term:', term);
  };

  if (isLoading) {
    return <div className="loading">Loading dashboard data...</div>;
  }

  return (
    <Router>
      <div className="dashboard-container">
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className={`main-content ${sidebarOpen ? '' : 'expanded'}`}>
          <Header cryptoData={cryptoData} stockData={stockData} onSearch={handleSearch} />
          <Routes>
            <Route path="/" element={<Navigate to="/crypto" />} />
            <Route path="/crypto" element={<CryptoMarket cryptoData={cryptoData} />} />
            <Route path="/stocks" element={<StockMarket stockData={stockData} />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};
export default App