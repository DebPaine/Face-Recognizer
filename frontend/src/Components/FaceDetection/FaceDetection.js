import React from 'react';
import './FaceDetection.css';
import BoundingBox from '../BoundingBox/BoundingBox';

const FaceDetection = ({ boxes, imageUrl }) => {
	return (
		<div className='center width mt2'>
			<img id='inputImage' className='width height center' src={imageUrl} alt='' />
			{boxes.map((c, i) => <BoundingBox key={i} box={c} />)}
		</div>
	);
};

export default FaceDetection;
