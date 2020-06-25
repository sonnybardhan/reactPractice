import React from 'react';

export default function Box({ height, width, color, removeBox, id }) {
	const style = {
		height: (height || 50) + 'px',
		width: (width || 100) + 'px',
		backgroundColor: color || 'green'
	};
	// const style = {
	// 	height: height ? height + 'px' : '100px',
	// 	width: width ? width + 'px' : '100px',
	// 	backgroundColor: color ? color : 'black'
	// };

	function handleRemove() {
		removeBox(id);
	}

	return (
		<div className="">
			<div style={style} />
			<button onClick={handleRemove}>Remove</button>
		</div>
	);
}
