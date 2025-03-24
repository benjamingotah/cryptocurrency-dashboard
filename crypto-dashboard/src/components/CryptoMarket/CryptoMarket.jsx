import React from 'react';
import Chart from '../Chart/Chart.jsx';
import './CryptoMarket.css';

const CryptoMarket = ({ cryptoData }) => {console.log('CryptoMarket Data:', cryptoData);
  return (
    <>
      <div className="section-header">
        <h2>Cryptocurrency Market</h2>
        {/* <select className="filter-dropdown">
          <option>All Assets</option>
          <option>Top Gainers</option>
          <option>Top Losers</option>
        </select> */}
      </div><br />
      <div className="market-overview">
        <div className="card-container">
          {cryptoData.map((crypto, index) => (
            <div className="market-card" key={index}>
              <div className="card-header">
                <h3>{crypto.name}</h3>
                <span className="symbol">{crypto.symbol}</span>
              </div>
              <div className="card-body">
                <p className="price">${crypto.price.toLocaleString()}</p>
                <p className={`change ${crypto.change24h >= 0 ? 'positive' : 'negative'}`}>
                  {crypto.change24h >= 0 ? '▲' : '▼'} {Math.abs(crypto.change24h)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="chart-container">
        <Chart data={cryptoData} type="crypto" />
      </div>
    </>
  );
};

export default CryptoMarket;