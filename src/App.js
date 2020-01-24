import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognizer from './components/FaceRecognizer/FaceRecognizer';

const app = new Clarifai.App({
	apiKey: '917ae1bc8dd6466699f1f5f13dec6144'
});

const particleOptions = {
	particles: {
		number: {
			value: 80,
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

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			imageUrl: ''
		};
	}
	onInputChange = (e) => {
		this.setState({ imageUrl: e.target.value });
	};

	onDetect = () => {
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.imageUrl).then(
			function(response) {
				console.log(response);
			},
			function(err) {
				// there was an error
			}
		);
	};

	render() {
		return (
			<div className="App">
				<Particles className="particles" params={particleOptions} />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm onInputChange={this.onInputChange} onDetect={this.onDetect} />
				<FaceRecognizer imageUrl={this.state.imageUrl} />
			</div>
		);
	}
}

export default App;
