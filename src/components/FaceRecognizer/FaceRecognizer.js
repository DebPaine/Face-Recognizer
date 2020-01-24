import React from 'react';

const FaceRecognizer = ({ imageUrl }) => {
	return (
		<div className="w-50 h-50 center mt2">
			<img src={imageUrl} />
		</div>
	);
};

export default FaceRecognizer;
