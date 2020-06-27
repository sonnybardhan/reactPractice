import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Chips from './Chips';
import Alcohol from './Alcohol';
import Candy from './Candy';
import Home from './Home';

export default class VendingMachine extends Component {
	render() {
		return (
			<div>
				<nav>
					<NavLink exact to="/">
						Home
					</NavLink>
					<NavLink exact to="/chips">
						Chips
					</NavLink>
					<NavLink exact to="/alcohol">
						Alcohol
					</NavLink>
					<NavLink exact to="/candy">
						Candy
					</NavLink>
				</nav>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/chips" component={Chips} />
						<Route exact path="/alcohol" component={Alcohol} />
						<Route exact path="/candy" component={Candy} />
					</Switch>
				</div>
			</div>
		);
	}
}
