import React from 'react';

export default function Coin({ src, alt }) {
	return <img src={src} alt={alt} style={{ width: '150px', height: '150px' }} />;
}
