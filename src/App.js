import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';
import ParticleBackground from './Components/ParticleBackground/ParticleBackground';
import Clarifai from 'clarifai';
import FaceDetection from './Components/FaceDetection/FaceDetection';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';

const app = new Clarifai.App({
	apiKey: '917ae1bc8dd6466699f1f5f13dec6144'
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imageUrl: '',
			boxes: [],
			route: 'signin',
			user: {
				id: '',
				name: '',
				email: '',
				entries: 0,
				joined: ''
			}
		};
	}

	loadUser = (data) => {
		this.setState({
			user: {
				id: data.id,
				name: data.name,
				email: data.email,
				entries: data.entries,
				joined: data.joined
			}
		});
	};

	onInputChange = (e) => {
		this.setState({ imageUrl: e.target.value });
	};

	onDetect = () => {
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.imageUrl)
			.then((response) => {
				if (response) {
					fetch('http://localhost:3001/image', {
						method: 'put',
						headers: { 'Content-type': 'application/json' },
						body: JSON.stringify({
							id: this.state.user.id
						})
					})
						.then((res) => res.json())
						.then((count) => this.setState(Object.assign(this.state.user, { entries: count })));

					const multipleBoxes = response.outputs[0].data.regions.map((obj) => obj.region_info.bounding_box);
					this.calculateFaceLocation(multipleBoxes);
				}
			})
			.catch((error) => console.log(error));
	};

	calculateFaceLocation = (boxes) => {
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

			return box;
		});
		this.setState({ boxes: bounding_boxes });
	};

	onRouteChange = (route) => {
		this.setState({ route: route });
	};

	render() {
		const { boxes, imageUrl, route } = this.state;
		const { name, entries } = this.state.user;
		return (
			<div className="App">
				<ParticleBackground />
				<Logo />
				{route === 'home' ? (
					<div>
						<Navigation onRouteChange={this.onRouteChange} />
						<Rank name={name} entries={entries} />
						<ImageLinkForm onInputChange={this.onInputChange} onDetect={this.onDetect} />
						<FaceDetection boxes={boxes} imageUrl={imageUrl} />
					</div>
				) : route === 'signin' ? (
					<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
				) : (
					<Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
				)}
			</div>
		);
	}

	// componentDidMount() {
	// 	async function getApi() {
	// 		const response = await fetch('http://localhost:3001/');
	// 		const data = await response.json();
	// 		console.log(data);
	// 	}
	// 	getApi();
	// }
}

export default App;
