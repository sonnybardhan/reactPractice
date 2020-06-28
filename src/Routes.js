import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Dogs from './Dogs';
import Dog from './Dog';
import DogDetail from './DogDetail';

export default class Routes extends Component {
	render() {
		const getDog = (props) => {
			let name = props.match.params.dog.toLowerCase();
			const currentDog = this.props.dogs.find((dog) => dog.name.toLowerCase() === name);
			return <DogDetail {...props} dog={currentDog} />;
		};
		return (
			<Switch>
				<Route exact path="/" render={() => <Dogs dogs={this.props.dogs} />} />
				<Route exact path="/dogs/:dog" render={getDog} />
				<Route render={() => <h1>Error! Page Not Found!</h1>} />
			</Switch>
		);
	}
}
