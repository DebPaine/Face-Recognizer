import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceDetection from './components/FaceDetection/FaceDetection';

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
			imageUrl: '',
			box: {}
		};
	}

	onInputChange = (e) => {
		this.setState({ imageUrl: e.target.value });
	};

	onDetect = () => {
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.imageUrl)
			.then((response) => {
				const boxLocation = response.outputs[0].data.regions[0].region_info.bounding_box;
				console.log(boxLocation);
				this.calculateFaceLocation(boxLocation);
			})
			.catch((error) => console.log(error));
	};

	calculateFaceLocation = (data) => {
		const image = document.getElementById('inputImage');
		const width = image.width;
		const height = image.height;
		const bounding_box = {
			leftCol: data.left_col * width,
			rightCol: width - data.right_col * width,
			bottomRow: height - data.bottom_row * height,
			topRow: data.top_row * height
		};
		this.setState({ box: bounding_box });
		console.log(bounding_box);
		console.log(this.state.box);
	};

	render() {
		return (
			<div className="App">
				<Particles className="particles" params={particleOptions} />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm onInputChange={this.onInputChange} onDetect={this.onDetect} />
				<FaceDetection box={this.state.box} imageUrl={this.state.imageUrl} />
			</div>
		);
	}
}

export default App;
