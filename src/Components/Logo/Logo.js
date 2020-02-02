import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.svg';

export default function Logo() {
	return (
		<div className="logo">
			<Tilt className="Tilt br2 shadow-2" options={{ max: 40 }} style={{ height: 110, width: 110 }}>
				<div className="Tilt-inner">
					<img src={brain} alt="brain logo" className="pa2" />
				</div>
			</Tilt>
		</div>
	);
}
