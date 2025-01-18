import { useState, useEffect } from "react";
import axios from "axios";
import "./prices.css";

function PriceSection() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10, // Fetch top 10 coins
              page: 1,
            },
          }
        );
        setCoins(response.data);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoins();
  }, []);

  return (
    <section className="prices">
      <h1 className="heading">Cryptocurrency Prices</h1>
      <div className="container">
        <div className="grid">
          {coins.map((coin) => (
            <div key={coin.id} className="card">
              <img src={coin.image} alt={coin.name} className="coin-image" />
              <h2 className="coin-name">
                {coin.name} ({coin.symbol.toUpperCase()})
              </h2>
              <p className="coin-price">
                Price: <span>${coin.current_price.toLocaleString()}</span>
              </p>
              <p className="market-cap">
                Market Cap: ${coin.market_cap.toLocaleString()}
              </p>
              <p className="price-change">
                Change (24h):{" "}
                <span
                  className={`price-change-value
                ${
                  coin.price_change_percentage_24h >= 0
                    ? "positive"
                    : "negative"
                }
                  `}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PriceSection;
