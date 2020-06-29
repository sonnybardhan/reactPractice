import React, { useState, useEffect } from 'react';

export default function useLS(initialValue = [], storeName) {
	const getStore = () => {
		return JSON.parse(localStorage.getItem(storeName)) || initialValue;
	};

	const [ state, setState ] = useState(getStore());

	const updateStore = (newState) => {
		setState(newState);
	};

	useEffect(
		() => {
			localStorage.setItem(storeName, JSON.stringify(state));
		},
		[ state ]
	);

	return [ state, updateStore ];
}
