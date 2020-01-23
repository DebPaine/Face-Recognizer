import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';

const particleOptions = {
	particles: {
		number: {
			value: 215,
			density: {
				enable: true,
				value_area: 800
			}
		},
		line_linked: {
			enable_auto: true
		}
	},
	interactivity: {
		detect_on: 'window',
		events: {
			onhover: {
				enable: true,
				mode: 'repulse'
			},
			onclick: {
				enable: true,
				mode: 'push'
			}
		}
	}
};

class App extends Component {
	render() {
		return (
			<div className="App">
				<Particles className="particles" params={particleOptions} />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm />

				{/* <FaceRecognizer /> */}
			</div>
		);
	}
}

export default App;
