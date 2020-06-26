import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';

export default class Deck extends Component {
	state = {
		deck_id: null,
		cards: [],
		remaining: 52
	};

	handleDeal = async () => {
		if (this.state.remaining > 0) {
			const url = `https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/`;
			const response = await axios.get(url);
			const data = response.data;

			const newCard = { imgUrl: data.cards[0].image, alt: data.cards[0].code };

			// console.log(newCard);
			this.setState((prev) => {
				return {
					...prev,
					remaining: data.remaining,
					cards: [ ...this.state.cards, newCard ]
				};
			});
		}
	};

	async componentDidMount() {
		const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/');
		const data = response.data;
		this.setState({
			deck_id: data.deck_id,
			remaining: data.remaining
		});
	}

	componentDidUpdate(prevProps, prevState) {}

	render() {
		const cards = this.state.cards.map((card) => <Card key={card.alt} imgUrl={card.imgUrl} alt={card.alt} />);

		return (
			<div>
				<div className="header">
					<h1>Deck of Cards</h1>
					<button onClick={this.handleDeal}>Deal</button>
				</div>
				{this.state.cards.length ? <div className="">{cards}</div> : ''}
			</div>
		);
	}
}
