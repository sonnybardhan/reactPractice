import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

export default class TodoList extends Component {
	state = {
		todos: []
	};

	addTodo = (todo) => {
		const newTodo = { ...todo, id: genId() };
		this.setState({ todos: [ ...this.state.todos, newTodo ] });
	};

	removeTodo = (id) => {
		this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
	};

	editTodo = (id, update) => {
		const todos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, todo: update.todo };
			}
			return todo;
		});
		this.setState({ todos: [ ...todos ] });
	};

	newToggleComplete = (id) => {
		const todos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});
		this.setState({ todos: [ ...todos ] });
	};

	render() {
		const todos = this.state.todos.map((todo) => (
			<Todo
				key={todo.id}
				id={todo.id}
				todo={todo.todo}
				complete={todo.complete}
				removeTodo={this.removeTodo}
				editTodo={this.editTodo}
				newToggleComplete={this.newToggleComplete}
			/>
		));
		return (
			<div className="container">
				<h1>Todo List</h1>
				<h4>A simple react todo list</h4>
				<div className="todos">{todos}</div>
				<NewTodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}

function genId() {
	return ((Math.random() * 10 ** 9) | 0) + ((Math.random() * 10 ** 9) | 0);
}
