import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

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
