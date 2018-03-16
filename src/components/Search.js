import React from 'react';

class Search extends React.Component{
	render() {
		return (
			<div className="search">
				<input type="text" className="name" placeholder="Filter pokemons by name" onChange = { this.props.changeInput }/>
			</div>
		);
	}
}

 export default Search;
