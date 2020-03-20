import React from 'react';
import './FaceDetection.css';
import BoundingBox from '../BoundingBox/BoundingBox';

const FaceDetection = ({ boxes, imageUrl }) => {
	return (
		<div className='center mt2 width'>
			<img id='inputImage' className='relative center width height' src={imageUrl} alt='' />
			{boxes.map((c, i) => <BoundingBox key={i} box={c} />)}
		</div>
	);
};

export default FaceDetection;
