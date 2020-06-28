import React, { Component } from 'react';
import Dog from './Dog';

import './Dogs.css';

export default class Dogs extends Component {
	render() {
		const dogs = this.props.dogs.map((dog) => <Dog key={dog.name} {...dog} />);

		return (
			<div>
				<h1>Click on a dog!</h1>
				<div className="dog-list">{dogs.length ? dogs : ''}</div>
			</div>
		);
	}
}
