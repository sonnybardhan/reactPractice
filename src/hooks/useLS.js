import { useState, useEffect } from 'react';

export default function useLS(initialValue = [], storeName) {
	function getStore() {
		let val;

		try {
			val = JSON.parse(localStorage.getItem(storeName) || String(initialValue));
		} catch (e) {
			val = initialValue;
		}
		return val;
	}

	const [ state, setState ] = useState(getStore());

	useEffect(
		() => {
			localStorage.setItem(storeName, JSON.stringify(state));
		},
		[ state ]
	);

	return [ state, setState ];
}
