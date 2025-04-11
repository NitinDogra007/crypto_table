import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Coin from './pages/Coin/Coin';
import Home from './pages/Home/Home';

// API KEY: CG-gwkjwPGZdcobSjEicRN72mjj 

function App() {
	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/coin/:coinId" element={<Coin />} />
			</Routes>
		</div>
	);
}

export default App;
