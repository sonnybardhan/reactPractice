import React from 'react';

export default function Joke(props) {
	function upVote() {
		props.vote(props.id, 1);
	}
	function downVote() {
		props.vote(props.id, -1);
	}

	return (
		<div>
			<button onClick={upVote}>+</button>
			<span>{props.votes}</span>
			<button onClick={downVote}>-</button>
			<span>{props.joke}</span>
			<span>{props.emoji}</span>
		</div>
	);
}
