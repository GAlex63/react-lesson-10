import React from 'react';
import Game from './components/Game';
import './App.css';

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">Игра крестики-нолики</header>
			<Game />
		</div>
	);
};
