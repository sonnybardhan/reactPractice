import React from 'react';
import './App.css';

// import Heads from './Heads';
// import Tails from './Tails';

import Coin from './Coin';

class App extends React.Component {
	state = {
		totalFlips: 0,
		heads: 0,
		tails: 0,
		src: null,
		alt: null
	};

	handleFlip = () => {
		const random = (Math.random() * 2) | 0;
		if (random === 0) {
			this.setState({ src: 'https://tinyurl.com/react-coin-heads-jpg', alt: 'heads' });
			this.setState((prev) => {
				return { heads: prev.heads + 1 };
			});
		} else {
			this.setState({ src: 'https://tinyurl.com/react-coin-tails-jpg', alt: 'tails' });
			this.setState((prev) => {
				return { tails: prev.tails + 1 };
			});
		}
		this.setState((prev) => {
			return { totalFlips: prev.totalFlips + 1 };
		});
	};

	render() {
		return (
			<div className="App">
				<h1>Let's flip a coin</h1>
				<div className="">
					<Coin src={this.state.src} alt={this.state.alt} />
				</div>
				<p>
					Out of {this.state.totalFlips} flips, there have been {this.state.heads} heads and{' '}
					{this.state.tails} tails.
				</p>
				<button onClick={this.handleFlip}>Flip</button>
			</div>
		);
	}
}

export default App;
