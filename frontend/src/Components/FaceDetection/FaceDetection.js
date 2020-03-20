import React from 'react';
import './FaceDetection.css';
import BoundingBox from '../BoundingBox/BoundingBox';

const FaceDetection = ({ boxes, imageUrl }) => {
	return (
		<div className='center mt2 width'>
			<div id='inputImage' className='center width height'>
				<div className='relative width height center'>
					<img src={imageUrl} alt='' />
					{boxes.map((c, i) => <BoundingBox key={i} box={c} />)}
				</div>
			</div>
		</div>
	);
};

export default FaceDetection;
