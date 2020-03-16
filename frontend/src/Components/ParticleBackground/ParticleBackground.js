import React from 'react';
import Particles from 'react-particles-js';

const ParticleBackground = () => {
	const particleOptions = {
		particles: {
			number: {
				value: 100,
				density: {
					enable: true,
					value_area: 800
				}
			},
			line_linked: {
				enable_auto: true
			}
		}
	};
	return <Particles className="particles" params={particleOptions} />;
};

export default ParticleBackground;
