import { useState } from 'react';

export default (initialTodos) => {
	const [ todos, setTodos ] = useState(initialTodos);

	return [
		todos,
		(newTask) => {
			setTodos([ ...todos, { id: genId(), task: newTask, completed: false } ]);
		},

		(id) => {
			const updatedTodos = todos.filter((todo) => todo.id !== id);
			setTodos(updatedTodos);
		},
		(id) => {
			const updatedTodos = todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			});
			setTodos(updatedTodos);
		},
		(id, newTask) => {
			const updatedTodos = todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, task: newTask, completed: false };
				}
				return todo;
			});
			setTodos(updatedTodos);
		}
	];
};

function genId() {
	return `${(Math.random() * 10 ** 5) | 0}-${(Math.random() * 10 ** 5) | 0}-${(Math.random() * 10 ** 5) | 0}`;
}
