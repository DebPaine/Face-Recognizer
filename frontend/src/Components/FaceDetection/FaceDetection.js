import React from 'react';
import './FaceDetection.css';
import BoundingBox from '../BoundingBox/BoundingBox';

const FaceDetection = ({ boxes, imageUrl }) => {
	return (
		<div className='center mt2 width'>
			<div className='center width height'>
				<div id='inputImage' className='relative width height center'>
					<img src={imageUrl} alt='' />
					{boxes.map((c, i) => <BoundingBox key={i} box={c} />)}
				</div>
			</div>
		</div>
	);
};

export default FaceDetection;
