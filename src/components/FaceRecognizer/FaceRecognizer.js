import React from 'react';

const FaceRecognizer = ({ imageUrl }) => {
	return (
		<div className="mt2 center">
			<img src={imageUrl} width="500px" height="auto" />
		</div>
	);
};

export default FaceRecognizer;
