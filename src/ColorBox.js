import React from 'react';
import './ColorBox.css';
import { randomColor } from './helpers/randomColor';

class ColorBox extends React.Component {
	state = {
		styles: {
			backgroundColor: this.props.backgroundColor
		}
	};

	handleClick = (e) => {
		const prevColor = this.state.styles.backgroundColor;
		let newColor = randomColor();

		while (newColor === prevColor) {
			newColor = randomColor();
		}

		this.setState({ styles: { backgroundColor: newColor } });
	};

	render() {
		return <div className="color-box" style={this.state.styles} onClick={this.handleClick} />;
	}
}

export default ColorBox;
