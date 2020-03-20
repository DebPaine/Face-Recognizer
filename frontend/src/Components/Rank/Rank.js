import React from 'react';

const Rank = ({ name, entries }) => {
	return (
		<div className='center width mb2'>
			<div className='white fontsize3vh font2 '>{`${name}, you have used Face Recognizer`}</div>
			<div className='white fontsize3vh font2 '>{`${entries} times`}</div>
		</div>
	);
};

export default Rank;
