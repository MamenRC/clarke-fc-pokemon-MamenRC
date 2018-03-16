import React from 'react';
import PokemonList from './PokemonList';
import Search from './Search';
import '../style/index.css';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.state = {
			arrayPokemon: [],
			valueInput: ''
		};
	}

	componentDidMount() {
		let arrayPokemon = [];
		for (let i=1; i<= 25 ; i++) {
			fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
			.then(response => response.json())
			.then(json => {
				const pokemons = json;
				arrayPokemon.push(pokemons);
				this.setState({
					arrayPokemon: arrayPokemon
				});
			});
		};
	}

	handleOnChange(e) {
		const valueToPokemon = e.target.value.toLowerCase();
		this.setState({
			valueInput: valueToPokemon
		});
	}

	printPokemon() {
		const pokemonOfList = this.state.arrayPokemon.sort((a,b) => a.id-b.id).filter(item =>
      item.name.toLowerCase().includes(this.state.valueInput)
    );

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
