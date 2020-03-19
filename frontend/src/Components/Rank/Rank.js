import React from 'react';

const Rank = ({ name, entries }) => {
	return (
		<div className='width'>
			<div className='white fontsize font2 '>{`${name}, you have used Face Recognizer`}</div>
			<div className='white fontsize font2 '>{`${entries} times`}</div>
		</div>
	);
};

export default Rank;
