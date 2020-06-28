import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Dogs from './Dogs';
import Dog from './Dog';
import DogDetail from './DogDetail';
import whiskey from './images/whiskey.jpg';
import tubby from './images/tubby.jpg';
import hazel from './images/hazel.jpg';
import Navbar from './Navbar';

class App extends React.Component {
	static defaultProps = {
		dogs: [
			{
				name: 'Whiskey',
				age: 5,
				src: whiskey,
				facts: [
					'Whiskey loves eating popcorn.',
					'Whiskey is a terrible guard dog.',
					'Whiskey wants to cuddle with you!'
				]
			},
			{
				name: 'Hazel',
				age: 3,
				src: hazel,
				facts: [
					'Hazel has soooo much energy!',
					'Hazel is highly intelligent.',
					'Hazel loves people more than dogs.'
				]
			},
			{
				name: 'Tubby',
				age: 4,
				src: tubby,
				facts: [
					'Tubby is not the brightest dog',
					'Tubby does not like walks or exercise.',
					'Tubby loves eating food.'
				]
			}
		]
	};

	render() {
		const dogNames = this.props.dogs.map((dog) => dog.name);

		return (
			<div className="App">
				<Navbar dogs={dogNames} />
				<Switch>
					<Route exact path="/" render={() => <Dogs dogs={this.props.dogs} />} />
					<Route
						exact
						path="/dogs/:dog"
						render={(routeProps) => (
							<DogDetail
								{...routeProps}
								dog={
									this.props.dogs.filter(
										(dog) => dog.name.toLowerCase() === routeProps.match.params.dog
									)[0]
								}
							/>
						)}
					/>
					<Route render={() => <h1>Error! Page Not Found!</h1>} />
				</Switch>
			</div>
		);
	}
}

export default App;
