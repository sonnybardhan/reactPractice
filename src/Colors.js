import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { randomColor } from './helpers/randomColor';
import './Colors.css';

class Colors extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const boxes = [];
		for (let i = 0; i < 18; i++) {
			boxes.push(<ColorBox key={i} backgroundColor={randomColor()} />);
		}

		return <div className="color-box-container">{boxes}</div>;
	}
}

export default Colors;
