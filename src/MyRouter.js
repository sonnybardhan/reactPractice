import React, { Component } from 'react';
import About from './About';
import Intro from './Intro';
import Contact from './Contact';

export default class MyRouter extends Component {
	state = {
		intro: true,
		about: false,
		contact: false
	};

	handleClick = (e) => {
		const { name } = e.target;
		const blankState = {
			intro: false,
			about: false,
			contact: false
		};
		switch (name) {
			case 'intro':
				blankState.intro = true;
				break;
			case 'about':
				blankState.about = true;
				break;
			case 'contact':
				blankState.contact = true;
				break;
			default:
				break;
		}

		this.setState({ ...blankState }, () => {
			console.log(this.state);
		});
	};
	render() {
		return (
			<div>
				<nav>
					<button name="intro" onClick={this.handleClick}>
						Intro
					</button>
					<button name="about" onClick={this.handleClick}>
						About
					</button>
					<button name="contact" onClick={this.handleClick}>
						Contact
					</button>
				</nav>
				<div className="">
					{this.state.intro ? <Intro /> : ''}
					{this.state.about ? <About /> : ''}
					{this.state.contact ? <Contact /> : ''}
				</div>
			</div>
		);
	}
}
