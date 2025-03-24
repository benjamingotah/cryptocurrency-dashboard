

export const fetchStockData = async () => {
    const stockSymbols = ['MSFT', 'TSLA', 'AAPL', 'GOOGL']; 
    const apiKey = 'H9LXQKKX957GI71Q'; // Alpha Vantage API key
    const stockData = [];
  
    try {
      for (const symbol of stockSymbols) {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`
        );
        const data = await response.json();
        console.log(`Stock API Response for ${symbol}:`, data); // Log the response
  
        // Extract the time series data
        const timeSeries = data['Time Series (Daily)'] || {}; // Handle undefined
  
        // Convert object to an array of objects
        const stockArray = Object.entries(timeSeries)
          .map(([date, values]) => ({
            symbol, // Add the stock symbol
            date,
            open: parseFloat(values['1. open']),
            high: parseFloat(values['2. high']),
            low: parseFloat(values['3. low']),
            close: parseFloat(values['4. close']),
            volume: parseInt(values['5. volume'], 10),
          }))
          .slice(0, 10); // Limit to the last 10 days
  
        stockData.push(...stockArray);
      }
  
      console.log('Formatted Stock Data:', stockData);
      return stockData;
    } catch (error) {
      console.error('Error fetching stock data:', error);
      return [];
    }
  };


