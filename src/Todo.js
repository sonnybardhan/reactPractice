import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Icon } from '@material-ui/core';

export default function Todo({ task, completed, removeTodo, id, toggleTodo }) {
	return (
		<ListItem>
			<Checkbox checked={completed} tabIndex={-1} onClick={() => toggleTodo(id)} />
			<ListItemText style={{ textDecoration: `${completed ? 'line-through' : 'none'}` }}>{task}</ListItemText>
			<ListItemSecondaryAction>
				<Icon aria-label="Edit" style={{ cursor: 'pointer' }}>
					<EditIcon />
				</Icon>
				<Icon aria-label="Delete" style={{ cursor: 'pointer' }}>
					<DeleteIcon onClick={() => removeTodo(id)} />
				</Icon>
			</ListItemSecondaryAction>
		</ListItem>
	);
}
