import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { style, width } from '@material-ui/system';

export default function EditTodoForm({ id, task, editTodo, toggleEdit }) {
	const [ value, setValue, reset ] = useInputState(task);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				editTodo(id, value);
				reset();
				toggleEdit();
			}}
			style={{ width: '100%' }}
		>
			<TextField onChange={setValue} value={value} margin="normal" label="Edit todo" fullWidth autoFocus />
		</form>
	);
}
