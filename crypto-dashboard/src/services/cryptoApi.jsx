export const fetchCryptoData = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false'
      );
      const data = await response.json();
      console.log('Crypto API Response:', data);
  
      // Transform the data into the expected format
      return data.map(coin => ({
        name: coin.name,
        symbol: coin.symbol,
        price: coin.current_price,
        change24h: coin.price_change_percentage_24h,
      }));
    } catch (error) {
      console.error('Error fetching crypto data:', error);
    }}