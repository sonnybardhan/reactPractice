import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

export default function EditTodoForm({ id, task, editTodo, toggleEdit }) {
	const [ value, setValue, reset ] = useInputState(task);

	return (
		<Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					editTodo(id, value);
					reset();
					toggleEdit();
				}}
			>
				<TextField onChange={setValue} value={value} margin="normal" label="Edit todo" fullWidth />
			</form>
		</Paper>
	);
}
