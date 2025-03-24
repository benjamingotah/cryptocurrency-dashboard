import React from 'react';
import Chart from '../Chart/Chart.jsx';
import './StockMarket.css';

const StockMarket = ({ stockData }) => {
  console.log('StockMarket Data:', stockData); // Log the data

  return (
    <>
      <div className="section-header">
        <h2>Stock Market</h2>
      </div>
      <div className="market-overview">
        <div className="card-container">
          {stockData.map((stock, index) => (
            <div className="market-card" key={index}>
              <div className="card-header">
                <h3>Microsoft (MSFT)</h3>
                <span className="symbol">{stock.date}</span>
              </div>
              <div className="card-body">
                <p className="price">${stock.close.toLocaleString()}</p>
                <p className={`change ${stock.close >= stock.open ? 'positive' : 'negative'}`}>
                  {stock.close >= stock.open ? '▲' : '▼'} {Math.abs(stock.close - stock.open).toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="chart-container">
        <Chart data={stockData} type="stocks" />
      ;
      </div>
    </>
  );
};

export default StockMarket;