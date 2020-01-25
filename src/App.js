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
			boxes: []
		};
	}

	onInputChange = (e) => {
		this.setState({ imageUrl: e.target.value });
	};

	onDetect = () => {
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.imageUrl)
			.then((response) => {
				// console.log(response);
				const multipleBoxes = response.outputs[0].data.regions.map((obj) => obj.region_info.bounding_box);
				// console.log(multipleBoxes);
				this.calculateFaceLocation(multipleBoxes);
			})
			.catch((error) => console.log(error));
	};

	calculateFaceLocation = (boxes) => {
		console.log(boxes);
		const image = document.getElementById('inputImage');
		const width = image.width;
		const height = image.height;
		const bounding_boxes = boxes.map((obj) => {
			const box = {
				topRow: obj.top_row * height,
				rightCol: width - obj.right_col * width,
				bottomRow: height - obj.bottom_row * height,
				leftCol: obj.left_col * width
			};
			// console.log(box);
			return box;
		});
		this.setState({ boxes: bounding_boxes });
		// console.log(bounding_boxes);
		// console.log(this.state.box);
	};

	render() {
		return (
			<div className="App">
				<Particles className="particles" params={particleOptions} />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm onInputChange={this.onInputChange} onDetect={this.onDetect} />
				<FaceDetection boxes={this.state.boxes} imageUrl={this.state.imageUrl} />
			</div>
		);
	}
}

export default App;
