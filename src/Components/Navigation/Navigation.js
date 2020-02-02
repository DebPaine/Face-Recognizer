import React from 'react';

const Navigation = ({ onRouteChange }) => {
	return (
		<nav className="flex justify-end">
			<p className="underline pa3 f4 link dim pointer black font3" onClick={() => onRouteChange('signin')}>
				Sign Out
			</p>
		</nav>
	);
};

export default Navigation;
