import React from 'react';

class PokemonCard extends React.Component {
  render() {
    return (
      <div className="card">
    		<p className="id">ID /  {this.props.idPokemon}</p>
        <img className="picture" src={this.props.picture} alt={this.props.namePokemon}/>
      	<p className="name">{this.props.namePokemon}</p>
    		<div className="type">
          {this.props.attack.map((type, i) => //Recorro el array
      		<span className={`box box--${this.props.attack[i].type.name.toLowerCase()}`} key={i}> {this.props.attack[i].type.name} </span>
      		)}
      	</div>
        <p className="height">Height: {this.props.height}</p>
        <p className="weight">Weitht: {this.props.weight}</p>
        <div className="abilities">Ability: {this.props.skills.map((ability, i) =>
          <span className="ability" key={i}> {this.props.skills[i].ability.name} </span>
          )}
        </div>
        <div className="evolution-pokemon">
        	<span className="evolution">Evolution from: {this.props.evolutionPokemon} </span>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
