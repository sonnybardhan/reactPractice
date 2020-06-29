import React, { useEffect } from 'react';
import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typograpy from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

const STORE = 'hooks-todo';

export default function TodoApp() {
	function getTodos() {
		return JSON.parse(localStorage.getItem(STORE) || '[]');
	}

	const [ todos, addTodo, removeTodo, toggleTodo, editTodo ] = useTodoState(getTodos());

	useEffect(
		() => {
			localStorage.setItem(STORE, JSON.stringify(todos));
		},
		[ todos ]
	);

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
					{todos.length ? (
						<TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
					) : (
						''
					)}
				</Grid>
			</Grid>
		</Paper>
	);
}
