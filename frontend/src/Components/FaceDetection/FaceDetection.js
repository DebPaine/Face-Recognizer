import React from 'react';
import './FaceDetection.css';
import BoundingBox from '../BoundingBox/BoundingBox';

const FaceDetection = ({ boxes, imageUrl }) => {
	return (
		<div className='center width mt2'>
			<div id='inputImage' className='absolute center width'>
				<img src={imageUrl} alt='' />
				{boxes.map((c, i) => <BoundingBox key={i} box={c} />)}
			</div>
		</div>
	);
};

export default FaceDetection;
