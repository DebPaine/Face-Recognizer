import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onDetect }) => {
	return (
		<div className='center width font'>
			<div className='flex center shadow-1 pa4 pr3 pl3 br2'>
				<input
					type='text'
					className='input is-rounded font3'
					onChange={onInputChange}
					placeholder='Please enter the URL of the image'
				/>
				<button className='button is-rounded is-outlined is-link pointer grow ml2 w-10' onClick={onDetect}>
					<span className='white font3 f6'>
						<strong>Detect</strong>
					</span>
				</button>
			</div>
		</div>
	);
};

export default ImageLinkForm;
