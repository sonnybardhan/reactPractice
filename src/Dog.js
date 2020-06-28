import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import './Dog.css';
import DogDetail from './DogDetail';

class Dog extends Component {
	handleClick = (e) => {
		// this.props.history.push(`/dogs/${this.props.name.toLowerCase()}`);
		{
			/* <Route render={(routeProps) => <DogDetail {...routeProps} dog={this.props} />} /> */
		}
	};

	render() {
		return (
			<div onClick={this.handleClick} className="dog-div">
				<img src={`${this.props.src}`} alt={this.props.name} />
				<p>{this.props.name}</p>
			</div>
		);
	}
}

export default withRouter(Dog);
