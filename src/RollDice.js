import React, { Component } from 'react'
import Die from './Die';
import './RollDice.css';

class RollDice extends Component{ 

	static defaultProps = {
		sides: ['one', 'two', 'three', 'four', 'five', 'six']
	};

	constructor(props){
		super(props);
		this.state = {die1: 'one', die2: 'one', rolling: false};
	}

	roll = () => {
		const die1Side = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
		const die2Side = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
		this.setState({die1: die1Side, die2: die2Side, rolling: true}, () => {
			setTimeout(() => {
				this.setState({rolling: false});
			}, 1000);
		});
	}


	render(){
		return(
			<div className="RollDice">
				<div className="RollDice-container">
					<Die face={this.state.die1} rolling={this.state.rolling}/>
					<Die face={this.state.die2} rolling={this.state.rolling}/>
				</div>
				<button onClick={this.roll} disabled={this.state.rolling}>
					{this.state.rolling ? 'Rolling ... ' : 'Roll dice!'}
				</button>
			</div>
		);
	}
}

export default RollDice; 