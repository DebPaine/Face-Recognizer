import React from 'react';
import './FaceDetection.css';
import BoundingBox from '../BoundingBox/BoundingBox';

const FaceDetection = ({ boxes, imageUrl }) => {
	return (
		<div className="mt2">
			<div className="absolute imgcontainer">
				<img id="inputImage" src={imageUrl} width="600px" height="auto" alt="" />

				{boxes.map((c, i) => <BoundingBox key={i} box={c} />)}
			</div>
		</div>
	);
};

export default FaceDetection;
