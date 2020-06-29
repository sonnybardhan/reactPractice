import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditTodoForm from './EditTodoForm';

import { Icon } from '@material-ui/core';

export default function Todo({ task, completed, removeTodo, id, toggleTodo, editTodo }) {
	const [ edit, setEdit ] = useState(false);

	const toggleEdit = () => {
		setEdit(!edit);
	};

	const handleEditClick = () => {
		if (completed) {
			toggleTodo(id);
		}
		toggleEdit();
	};
	return (
		<ListItem>
			<Checkbox checked={completed} tabIndex={-1} onClick={() => toggleTodo(id)} />
			<ListItemText style={{ textDecoration: `${completed ? 'line-through' : 'none'}`, height: '64px' }}>
				{edit ? <EditTodoForm id={id} task={task} editTodo={editTodo} toggleEdit={toggleEdit} /> : task}
			</ListItemText>
			<ListItemSecondaryAction>
				<Icon aria-label="Edit" style={{ cursor: 'pointer', color: 'yellowgreen' }}>
					<EditIcon onClick={handleEditClick} />
				</Icon>
				<Icon aria-label="Delete" style={{ cursor: 'pointer', color: 'red' }}>
					<DeleteIcon onClick={() => removeTodo(id)} />
				</Icon>
			</ListItemSecondaryAction>
		</ListItem>
	);
}
