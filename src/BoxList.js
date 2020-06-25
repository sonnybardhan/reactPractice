import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

export default class BoxList extends Component {
	state = {
		boxes: []
	};

	addBox = (box) => {
		const newBox = { ...box, id: idGen() };
		this.setState((prev) => {
			return { ...prev, boxes: [ ...prev.boxes, newBox ] };
		});
	};

	removeBox = (incomingId) => {
		console.log('remove box called with: ', incomingId);
		const remainingBoxes = this.state.boxes.filter(({ id }) => {
			// console.log(id === incomingId);
			return id !== incomingId;
		});

		this.setState((prev) => {
			return { boxes: remainingBoxes };
		});
	};

	render() {
		console.log(this.state.boxes.length);
		return (
			<div className="">
				<NewBoxForm addBox={this.addBox} />
				<div className="">
					{this.state.boxes.length ? (
						this.state.boxes.map(({ height, width, color, id }) => (
							<Box
								height={height}
								width={width}
								color={color}
								id={id}
								key={id}
								removeBox={this.removeBox}
							/>
						))
					) : (
						''
					)}
				</div>
			</div>
		);
	}
}

function idGen() {
	return `${(Math.random() * 10 ** 4) | 0}-${(Math.random() * 10 ** 4) | 1}-${(Math.random() * 10 ** 4) | 0}`;
}
