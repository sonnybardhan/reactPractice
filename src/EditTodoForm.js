import React, { Component } from 'react';

export default class NewTodoForm extends Component {
	state = { todo: this.props.todo };

	handleChange = (e) => {
		this.setState({ todo: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.editTodo(this.props.id, this.state);
		this.setState({ todo: '' });
		this.props.toggleEdit();
		e.stopPropagation();
	};

	render() {
		return (
			<div className="">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="todo" />
					<input type="text" value={this.state.todo} onChange={this.handleChange} name="todo" id="todo" />
					<button>Update</button>
				</form>
			</div>
		);
	}
}
