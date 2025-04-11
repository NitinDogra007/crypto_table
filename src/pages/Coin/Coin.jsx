import React, { useState, useEffect, useContext } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";

function Coin() {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);

  useEffect(() => {
    async function fetchAllData() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-gwkjwPGZdcobSjEicRN72mjj",
        },
      };

      try {
        // Run both fetches in parallel
        const [coinRes, histRes] = await Promise.all([
          fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options),
          fetch(
            `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=10&interval=daily`,
            options
          ),
        ]);

        // Convert responses to JSON
        const coinData = await coinRes.json();
        const histData = await histRes.json();

        // Update state with the fetched data
        setCoinData(coinData);
        setHistoricalData(histData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchAllData();
  }, [currency, coinId]);

  if (coinData && historicalData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} alt="" />
          <p>
            <b>
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        <div className="coin-chart">
          <LineChart historicalData={historicalData} />
        </div>
        <div className="coin-info">
          <ul>
            <li>Crpto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
}

export default Coin;
