import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';

export default class Jokes extends Component {
	state = {
		jokeIds: [],
		jokes: [],
		emojis: [ '😠', '😑', '🙂', '😁', '🤣' ]
	};

	async componentDidMount() {
		// console.log('component DID mount called');
		//fetch from local storage here and set to state
		const savedState = JSON.parse(localStorage.getItem('dadJokes'));
		if (savedState) {
			// console.log('savedState found:', savedState);
			this.setState({ ...savedState });
		} else {
			this.fetchJokes();
		}
	}

	fetchJokes = async (num = 10) => {
		const jokeIds = [ ...this.state.jokeIds ];
		const newJokesArray = [];
		do {
			const response = await axios.get('https://icanhazdadjoke.com/', {
				headers: { Accept: 'application/json' }
			});
			const data = response.data;

			if (!newJokesArray.includes(data.id)) {
				const newJoke = {
					id: data.id,
					joke: data.joke,
					votes: 0
				};
				jokeIds.push(data.id);
				newJokesArray.push(newJoke);
				num--;
			}
		} while (num);

		this.setState({
			jokeIds: [ ...jokeIds ],
			jokes: [ ...newJokesArray, ...this.state.jokes ]
		});
	};

	vote = (id, amount) => {
		const jokes = this.state.jokes.map((joke) => {
			if (joke.id === id) {
				return { ...joke, votes: joke.votes + amount };
			}
			return joke;
		});

		this.setState({ jokes });
	};

	moreJokes = () => {
		this.fetchJokes();
	};

	componentDidUpdate() {
		//save again to local storage
		const state = JSON.stringify(this.state);
		// console.log(state);
		localStorage.setItem('dadJokes', state);
	}

	render() {
		// console.log('render called');
		let jokes;
		if (this.state.jokes.length) {
			jokes = this.state.jokes.slice(0, 10).map((joke) => {
				let emoji;
				const score = joke.votes;
				if (score > 10) {
					emoji = this.state.emojis[4];
				} else if (score > 5 && score <= 10) {
					emoji = this.state.emojis[3];
				} else if (score >= 0 && score <= 5) {
					emoji = this.state.emojis[2];
				} else if (score >= -5 && score < 0) {
					emoji = this.state.emojis[1];
				} else {
					emoji = this.state.emojis[0];
				}
				return (
					<Joke
						key={joke.id}
						id={joke.id}
						joke={joke.joke}
						emoji={emoji}
						votes={joke.votes}
						vote={this.vote}
					/>
				);
			});
		}
		return (
			<div className="container">
				<h1>Dad Jokes</h1>
				<p>
					<button onClick={this.moreJokes}>More</button>
				</p>
				<div className="">{jokes}</div>
			</div>
		);
	}
}
