import React from 'react';
import PokemonList from './PokemonList';
import Search from './Search';
import '../style/index.css';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.state = {
			arrayPokemon: [], //Array de los pokemon
			valueInput: '', //Recojo el valor del filtro
			evolutionPokemon:[] //Array de la evolución de los pokemon
		};
	}

	componentDidMount() {
		let arrayPokemon = [];
		let evolutionPokemon = [];
		//Llamo a la API
		for (let i=1; i<= 25 ; i++) {
			fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
			.then(response => response.json()) //Lo transformo a json para parsearlo
			.then(json => {
				const pokemons = json;
				arrayPokemon.push(pokemons); //Inserto el objeto de los pokemon en el array
				console.log('pokemons: ', pokemons);
				this.setState({
					arrayPokemon: arrayPokemon
				});
			});
			fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
				.then(response => response.json())
				.then(json => {
					const pokemonEvolution = json;
					evolutionPokemon.push(pokemonEvolution);
					console.log('pokemonEvolution: ', pokemonEvolution);
					this.setState({
						evolutionPokemon: evolutionPokemon.evolves_from_species
					});
				})
			};
		console.log('arrayPokemon: ', arrayPokemon);
		console.log('evolutionPokemon: ', evolutionPokemon);

	}

	//Recojo el valor del input
	handleOnChange(e) {
		const valueToPokemon = e.target.value.toLowerCase();
		this.setState({
			valueInput: valueToPokemon
		});
	}

//Para realizar el filtrado
	printPokemon() {
		const pokemonOfList = this.state.arrayPokemon.sort((a,b) => a.id-b.id).filter(item =>
      item.name.toLowerCase().includes(this.state.valueInput)
    );
		const pokemonInEvolution = this.state.evolutionPokemon;
		console.log('pokemonInEvolution', pokemonInEvolution);


		return (
			<PokemonList pokemonbugs = {pokemonOfList}/>
		);
	}

	render() {
		return (
			<div className="app">
				<header className="header-app">
					<h1 className="title-app">Pokédex</h1>
				</header>
				<main className="list-main">
					<Search changeInput = {this.handleOnChange}/>
					{ this.printPokemon() }
				</main>
			</div>
		);
	}
}

export default App;
