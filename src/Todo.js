import React from 'react';
import EditTodoForm from './EditTodoForm';

export default class Todo extends React.Component {
	state = {
		todo: '',
		edit: false
	};

	handleDelete = () => {
		this.props.removeTodo(this.props.id);
	};

	toggleEdit = () => {
		this.setState({ edit: !this.state.edit });
	};

	toggleComplete = () => {
		this.props.newToggleComplete(this.props.id);
	};

	render() {
		return (
			<div>
				<span
					className=""
					style={{ textDecoration: this.props.complete && 'line-through' }}
					onClick={this.toggleComplete}
				>
					{this.state.edit ? (
						<EditTodoForm
							todo={this.props.todo}
							id={this.props.id}
							editTodo={this.props.editTodo}
							toggleEdit={this.toggleEdit}
						/>
					) : (
						this.props.todo
					)}
				</span>
				{!this.state.edit && 
				<>
					<button onClick={this.toggleEdit}>Edit</button>
					<button onClick={this.handleDelete}>X</button>
				</>
				}
			</div>
		);
	}
}
