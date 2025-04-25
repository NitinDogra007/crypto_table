import { useEffect, useState } from 'react';
import { CoinContext } from './CoinContext';

function CoinContextProvider(props) {
	const [allCoin, setAllCoin] = useState([]);
	const [currency, setCurrency] = useState({
		name: 'usd',
		symbol: '$',
	});

	useEffect(() => {
		async function fetchAllCoin() {
			const options = {
				method: 'GET',
				headers: {
					accept: 'application/json',
					'x-cg-demo-api-key': import.meta.env.VITE_API_KEY,
				},
			};

			try {
				const res = await fetch(
					`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
					options
				);
				const data = await res.json();
				setAllCoin(data);
			} catch (error) {
				console.error(error);
			}
		}

		fetchAllCoin();
	}, [currency]);

	const contextValue = {
		allCoin,
		currency,
		setCurrency,
	};

	return (
		<CoinContext.Provider value={contextValue}>
			{props.children}
		</CoinContext.Provider>
	);
}

export default CoinContextProvider;
