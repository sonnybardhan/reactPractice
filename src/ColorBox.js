import React from 'react';
import './ColorBox.css';

export default function ColorBox({ backgroundColor }) {
	const styles = {
		backgroundColor
	};

	return <div className="color-box" style={styles} />;
}
