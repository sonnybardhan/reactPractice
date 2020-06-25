import React from 'react';

export default function Box({ height, width, color, removeBox, id }) {
	const style = {
		height: height + 'px',
		width: width + 'px',
		backgroundColor: color
	};

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
