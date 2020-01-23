import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
	return (
		<div className="font">
			<p className="f2 mb2 black font1">This is a Face Recognition App</p>
			<div className="inputbuttondiv flex justify-center pa4">
				<input type="text" className="input is-rounded" />
				<button className="button is-rounded is-outlined is-success ml2 pointer grow">
					<span className="white font3">
						<strong>Detect</strong>
					</span>
				</button>
			</div>
		</div>
	);
};

export default ImageLinkForm;
