import React, { Component } from 'react';

export default class DogDetail extends Component {
	render() {
		// const dog = this.props.dog[0];
		const dog = this.props.dog;
		return (
			<div className="dog-detail">
				<img src={dog.src} alt={dog.name} />
				<h3>{dog.name}</h3>
				{dog.facts.map((fact) => (
					<p key={fact}>
						{fact}
						<br />
					</p>
				))}
				<button onClick={this.props.history.goBack}>Go back</button>
			</div>
		);
	}
}
