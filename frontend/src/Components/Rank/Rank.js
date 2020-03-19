import React from 'react';

const Rank = ({ name, entries }) => {
	return (
		<div className='width'>
			<div className='white f3 font2 '>{`${name}, you have used Face Recognizer`}</div>
			<div className='white f1 font2 '>{`${entries} times`}</div>
		</div>
	);
};

export default Rank;
