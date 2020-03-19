import React from 'react';
import './BoundingBox.css';

const BoundingBox = ({ box }) => {
	return (
		<div
			className='absolute bounding-box'
			style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
		/>
	);
};

export default BoundingBox;
