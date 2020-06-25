import React, { Component } from 'react';
import './WiseSquare.css';

class WiseSquare extends Component {
	dispenseWisdom = () => {
		let messages = [
			"do unto others as you'd wish them to do unto you",
			'make hay while the sun shines',
			'all work and no play makes jack a dull boy'
		];
		let randomIndex = (Math.random() * messages.length) | 0;
		console.log(messages[randomIndex]);
	};

	render() {
		return (
			<div className="wise-square" onMouseEnter={this.dispenseWisdom}>
				:)
			</div>
		);
	}
}

export default WiseSquare;
