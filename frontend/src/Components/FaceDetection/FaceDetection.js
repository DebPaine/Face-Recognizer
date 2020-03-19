import React from 'react';
import './FaceDetection.css';
import BoundingBox from '../BoundingBox/BoundingBox';

const FaceDetection = ({ boxes, imageUrl }) => {
	return (
		<div className='center width mt2'>
			<div className='relative center'>
				<div>
					<img id='inputImage' className='width height center' src={imageUrl} alt='' />
					{boxes.map((c, i) => <BoundingBox key={i} box={c} />)}
				</div>
			</div>
		</div>
	);
};

export default FaceDetection;
