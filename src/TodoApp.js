import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typograpy from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

const STORE = 'hooks-todo';

export default function TodoApp() {
	const initialTodos = [
		{ id: genId(), task: 'clean fishtank', completed: false },
		{ id: genId(), task: 'walk dog', completed: false },
		{ id: genId(), task: 'build a career', completed: true }
	];

	function getTodos() {
		let todos = [];
		if (todos) {
			todos = JSON.parse(localStorage.getItem(STORE));
		} else {
			todos = initialTodos;
		}
		return todos;
	}

	// const [ todos, setTodos ] = useState(initialTodos);
	const [ todos, setTodos ] = useState(getTodos());

	useEffect(
		() => {
			localStorage.setItem(STORE, JSON.stringify(todos));
		},
		[ todos ]
	);

	const addTodo = (newTask) => {
		setTodos([ ...todos, { id: genId(), task: newTask, completed: false } ]);
	};

	const removeTodo = (id) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};

	const toggleTodo = (id) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const editTodo = (id, newTask) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: newTask, completed: false };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};
	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#fafafa'
			}}
			elevation={0}
		>
			<AppBar color="primary" position="static" style={{ height: '64px' }}>
				<Toolbar>
					<Typograpy color="inherit">Todo with Hoooks</Typograpy>
				</Toolbar>
			</AppBar>
			<Grid container justify="center" style={{ marginTop: '1rem' }}>
				<Grid item xs={11} md={8} lg={4}>
					<TodoForm addTodo={addTodo} />
					<TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
				</Grid>
			</Grid>
		</Paper>
	);
}

function genId() {
	return `${(Math.random() * 10 ** 5) | 0}-${(Math.random() * 10 ** 5) | 0}-${(Math.random() * 10 ** 5) | 0}`;
}
