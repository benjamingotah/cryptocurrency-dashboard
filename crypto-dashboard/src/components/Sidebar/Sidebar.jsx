import React from 'react';
import './Sidebar.css';

const Sidebar = ({ sidebarOpen, toggleSidebar,activeTab, setActiveTab }) => {
  return (
    <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h2>Financial Dashboard</h2>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {sidebarOpen ? '←' : '→'}
        </button>
      </div>
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <ul>
            <li onClick={() => setActiveTab('dashboard')}>
              <span className="nav-icon">📊</span>
              <span className="nav-text"><a href="/dashboard">Dashboard</a></span>
            </li>
            <li onClick={() => setActiveTab('crypto')}>
              <span className="nav-icon"><a href="crypto">₿</a></span>
              <span className="nav-text"><a href="crypto">Crypto Market</a></span>
            </li>
            <li onClick={() => setActiveTab('stocks')}>
              <span className="nav-icon"><a href="stocks">📈</a></span>
              <span className="nav-text"><a href="/stocks">Stocks</a></span>
            </li>
            <li onClick={() => setActiveTab('watchlist')}>
              <span className="nav-icon">⭐</span>
              <span className="nav-text"><a href="watchlist">Watchlist</a></span>
            </li>
            <li onClick={() => setActiveTab('news')}>
              <span className="nav-icon"><a href="news">📰</a></span>
              <span className="nav-text"><a href="news">News</a></span>
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <ul>
            <li onClick={() => alert('Settings clicked')}>
              <span className="nav-icon">⚙️</span>
              <span className="nav-text">Settings</span>
            </li>
            <li onClick={() => alert('Help clicked')}>
              <span className="nav-icon">❓</span>
              <span className="nav-text">Help</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;