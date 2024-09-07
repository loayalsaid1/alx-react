import React, { Component } from 'react';

export default class Form extends Component {
	initialState = {
		name: '',
		job: ''
	}

	state = this.initialState

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		})
	}

	submitForm = () => {
		this.props.handleSubmit(this.state);
		this.setState(this.initialState);
	}

	render () {
		const { name, job }  = this.state;

		return (
			<form>
				<label htmlFor="name">Name</label>
				<input
				name="name"
				id="name"
				value={this.state.name}
				onChange={this.handleChange} />

				<label htmlFor="job">Job</label>
				<input
				name="job"
				id="job"
				value={this.state.job}
				onChange={this.handleChange} />
				
				<input type="button" value="Submit" onClick={this.submitForm} />
			</form>
		)
	}
}
