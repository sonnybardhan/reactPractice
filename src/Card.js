import React from 'react';
import './Card.css';

export default function Card(props) {
	// let angle = Math.random() * 90 - 45;
	// let xPos = Math.random() * 40 - 20;
	// let yPos = Math.random() * 40 - 20;
	// const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;

	const style = {
		transform: `rotate(${genAngle()}deg)`
	};
	return <img src={props.imgUrl} alt={props.alt} style={style} />;
}

function genAngle() {
	return ((Math.random() * 25) | 0) * (Math.random() > 0.5 ? 1 : -1);
}
