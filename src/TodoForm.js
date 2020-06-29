import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

export default function TodoForm({ addTodo }) {
	const [ value, setValue, reset ] = useInputState('');

	return (
		<Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addTodo(value);
					reset();
				}}
			>
				<TextField onChange={setValue} value={value} margin="normal" label="Add new todo" fullWidth />
			</form>
		</Paper>
	);
}
