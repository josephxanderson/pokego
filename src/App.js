import { useEffect, useState } from 'react';

const App = () => {
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {

		fetch('https://pokeapi.co/api/v2/pokemon/snorlax')
		.then(response => response.json())
		.then((data) => {
			setPokemon(data);
		}).catch((error) => {
			console.log(error);
		});

	}, []);

	if (pokemon) {
		return (
			<div className="App">
				<img src={pokemon.sprites.front_shiny} alt="" />
				<h1>{pokemon.name}</h1>

				{pokemon.moves.map((move) => {
					return (
						<p>{move.move.name}</p>
					);				
				})}
			</div>
		);
	} else {
		return null;
	}

}

export default App;
