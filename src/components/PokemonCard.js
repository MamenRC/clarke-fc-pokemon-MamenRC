import React from 'react';

class PokemonCard extends React.Component {
  render() {
    return (
      <div className="card">
    		<p className="id">ID /  {this.props.idPokemon}</p>
      	<img className="picture" src={this.props.picture} alt="pokemon"/>
      	<p className="name">{this.props.namePokemon}</p>
      		<div className="type">
      			{this.props.attack.map((type, i) =>
      			<span className={`box box--${this.props.attack[i].type.name.toLowerCase()}`} key={i}> {this.props.attack[i].type.name} </span>
      			)}
      		</div>
      	</div>
    );
  }
}

export default PokemonCard;
