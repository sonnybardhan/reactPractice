import React from 'react';

export default class Chips extends React.Component {
	state = {
		bags: 0
	};

	eat = () => {
		this.setState((prev) => ({ bags: prev.bags + 1 }));
	};

	render() {
		return (
			<div>
				<h1>Chips</h1>
				<h2>Bags Eaten</h2>
				<h3>
					<button onClick={this.eat}>Eat!</button>
					{this.state.bags}
				</h3>
			</div>
		);
	}
}
