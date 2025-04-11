import { createContext, useEffect, useState } from 'react';

export const CoinContext = createContext();

function CoinContextProvider(props) {
	const [allCoin, setAllCoin] = useState([]);
	const [currency, setCurrency] = useState({
		name: 'usd',
		symbol: '$',
	});

	async function fetchAllCoin() {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				'x-cg-demo-api-key': 'CG-gwkjwPGZdcobSjEicRN72mjj',
			},
		};

		fetch(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
			options
		)
			.then((res) => res.json())
			.then((res) => setAllCoin(res))
			.catch((err) => console.error(err));
	}

	useEffect(() => {
		fetchAllCoin();
	}, [currency]);

	const contextValue = {
		allCoin,
		currency,
		setCurrency,
	};

	return (
		<>
			<CoinContextProvider value={contextValue}>
				{props.children}
			</CoinContextProvider>
		</>
	);
}

export default CoinContextProvider;
