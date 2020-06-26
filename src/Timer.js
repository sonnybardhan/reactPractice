import React, { Component } from 'react';

export default class Timer extends Component {
	state = {
		time: new Date()
	};

	componentDidMount() {
		const id = setInterval(() => {
			this.setState({ time: new Date() });
		}, 1000);
	}

	render() {
		return <div>{this.state.time.getSeconds()}</div>;
	}
}
