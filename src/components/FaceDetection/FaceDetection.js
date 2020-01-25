import React from 'react';
import './FaceDetection.css';

const FaceDetection = ({ box, imageUrl }) => {
	return (
		<div className="mt2">
			<div className="absolute imgcontainer">
				<img id="inputImage" src={imageUrl} width="300px" height="auto" alt="" />
				<div
					className="absolute bounding-box"
					style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
				/>
			</div>
		</div>
	);
};

export default FaceDetection;
