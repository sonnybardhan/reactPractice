import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
	render() {
		const homeLink = (
			<NavLink key={'home'} activeClassName="active-link" to={`/`} className="nav-item">
				Home
			</NavLink>
		);

		const links = this.props.dogs.map((dog) => (
			<NavLink key={dog} activeClassName="active-link" to={`/dogs/${dog.toLowerCase()}`} className="nav-item">
				{dog}
			</NavLink>
		));
		const allLinks = [ homeLink, ...links ];

		return <nav className="navbar">{allLinks}</nav>;
	}
}
