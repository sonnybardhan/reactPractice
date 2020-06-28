import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dog.css';
// import DogDetail from './DogDetail';

class Dog extends Component {
	render() {
		return (
			<Link to={`/dogs/${this.props.name.toLowerCase()}`} className="dog-div">
				<img src={`${this.props.src}`} alt={this.props.name} />
				{this.props.name}
			</Link>
		);
	}
}

export default Dog;
