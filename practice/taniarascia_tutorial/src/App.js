import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

export default class App extends React.Component {
	state = {
		characters: []
	}

	removeCharacter = (index) => {
		this.setState({
			characters: this.state.characters.filter((character, i) => {
				return i !== index;
			})
		})
	}

	handleSubmit = (character) => {
		this.setState({characters: [...this.state.characters, character]});
	}

	render() {
		const { characters } = this.state;
		return (
			<div className="container">
				<Table charactersData={characters} removeCharacter={this.removeCharacter}/>
				<Form handleSubmit={this.handleSubmit} />
			</div>
		)
	}
}
