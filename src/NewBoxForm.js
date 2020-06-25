import React, { Component } from 'react';

export default class NewBoxForm extends Component {
	state = { height: '', width: '', color: '' };

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addBox(this.state);
		this.setState({ height: '', width: '', color: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="height">Height: </label>&emsp;
				<input type="text" name="height" value={this.state.height} onChange={this.handleChange} />
				<br />
				<label htmlFor="width">Width: </label>&emsp;
				<input type="text" name="width" value={this.state.width} onChange={this.handleChange} />
				<br />
				<label htmlFor="color">Color: </label>&emsp;
				<input type="text" name="color" value={this.state.color} onChange={this.handleChange} />
				<br />
				<button>Create</button>
				<br />
			</form>
		);
	}
}
