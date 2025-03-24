import React, { useState, useEffect } from "react";
import "./Watchlist.css";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo"
        );
        const data = await response.json();
        console.log("Stock API Response:", data);

        // Extracting latest stock price
        const timeSeries = data["Time Series (Daily)"];
        if (timeSeries) {
          const latestDate = Object.keys(timeSeries)[0];
          const latestStock = {
            symbol: "MSFT",
            price: timeSeries[latestDate]["4. close"],
            date: latestDate,
          };
          setWatchlist([latestStock]);
        } else {
          setError("Failed to fetch stock data.");
        }
      } catch (error) {
        console.error("Error fetching stock data:", error);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div className="watchlist-container">
      <div className="watchlist-content">
        <h2>Your Watchlist</h2>

        {loading ? (
          <p>Loading stock data...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : watchlist.length === 0 ? (
          <p>You haven't added any assets to your watchlist yet.</p>
        ) : (
          <ul className="watchlist">
            {watchlist.map((stock, index) => (
              <li key={index} className="stock-item">
                <span>{stock.symbol}</span>
                <span>${stock.price}</span>
                <small>{stock.date}</small>
              </li>
            ))}
          </ul>
        )}

        <button className="action-button">Add More Assets</button>
      </div>
    </div>
  );
};

export default Watchlist;
