import React, { Component } from 'react';

export default class NewTodoForm extends Component {
	state = { todo: '', complete: false };

	handleChange = (e) => {
		this.setState({ todo: e.target.value, complete: false });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({ todo: '', complete: false });
	};

	render() {
		return (
			<div className="">
				<h3>New Todo</h3>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="todo" />
					<input type="text" value={this.state.todo} onChange={this.handleChange} name="todo" id="todo" />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
