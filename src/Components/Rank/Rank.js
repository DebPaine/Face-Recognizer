import React from 'react';

const Rank = ({ name, entries }) => {
	return (
		<div>
			<div className="white f3 font2 ">{`${name}, your rank is....`}</div>
			<div className="white f1 font2 ">{entries}</div>
		</div>
	);
};

export default Rank;
