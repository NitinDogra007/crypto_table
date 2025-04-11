import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { CoinContext } from "../../context/CoinContext";
import "./Navbar.css";

function Navbar() {
  const { setCurrency } = useContext(CoinContext);

  function currencyHandler(event) {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  }

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
