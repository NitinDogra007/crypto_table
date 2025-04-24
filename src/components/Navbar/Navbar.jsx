import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { CoinContext } from '../../context/CoinContext';
import './Navbar.css';

function Navbar() {
	const { setCurrency } = useContext(CoinContext);

	function currencyHandler(event) {
		switch (event.target.value) {
			case 'usd': {
				setCurrency({ name: 'usd', symbol: '$' });
				break;
			}
			case 'eur': {
				setCurrency({ name: 'eur', symbol: '€' });
				break;
			}
			case 'inr': {
				setCurrency({ name: 'inr', symbol: '₹' });
				break;
			}
			case 'aud': {
				setCurrency({ name: 'aud', symbol: '$' });
				break;
			}
			default: {
				setCurrency({ name: 'usd', symbol: '$' });
				break;
			}
		}
	}

	return (
		<div className="navbar">
			<Link to={'/'}>
				<img src={logo} alt="logo" className="logo" />
			</Link>
			<ul></ul>
			<div className="nav-right">
				<select onChange={currencyHandler}>
					<option value="usd">USD</option>
					<option value="aud">AUD</option>
					<option value="eur">EUR</option>
					<option value="inr">INR</option>
				</select>
			</div>
		</div>
	);
}

export default Navbar;
