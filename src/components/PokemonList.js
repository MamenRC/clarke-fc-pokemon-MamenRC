import React from 'react';
import PokemonCard from './PokemonCard';

class PokemonList extends React.Component{
	render() {
		return (
			<ul className="list-pokemon">
				{this.props.pokemonbugs.map((list, index) =>
					<li className="list-pokemon--li" key = {index}>
						<PokemonCard
							namePokemon = {list.name}
							idPokemon = {list.id}
							picture = {list.sprites.back_default}
							attack = {list.types}
							weight = {list.weight}
							height = {list.height}
							skills = {list.abilities}
						/>
					</li>)
				}
			</ul>
		);
	}
}

export default PokemonList;
