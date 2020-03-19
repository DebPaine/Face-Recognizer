import React from 'react';
import './FaceDetection.css';
import BoundingBox from '../BoundingBox/BoundingBox';

const FaceDetection = ({ boxes, imageUrl }) => {
	return (
		<div className='center width mt2'>
			<div className='absolute'>
				<div id='inputImage' className='center width'>
					<img src={imageUrl} alt='' />
					{boxes.map((c, i) => <BoundingBox key={i} box={c} />)}
				</div>
			</div>
		</div>
	);
};

export default FaceDetection;
