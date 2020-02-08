import React, { Component } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Logo from '../Components/Logo/Logo';
import ImageLinkForm from '../Components/ImageLinkForm/ImageLinkForm';
import Rank from '../Components/Rank/Rank';
import './App.css';
import ParticleBackground from '../Components/ParticleBackground/ParticleBackground';
import FaceDetection from '../Components/FaceDetection/FaceDetection';
import SignIn from '../Components/SignIn/SignIn';
import Register from '../Components/Register/Register';

const initialState = {
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
class App extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
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
		fetch('http://localhost:3001/ClarifaiAPI', {
			method: 'post',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				url: this.state.imageUrl
			})
		})
			.then((response) => response.json())
			.then((boundingRegions) => {
				if (boundingRegions) {
					const multipleBoxes = boundingRegions.outputs[0].data.regions.map(
						(obj) => obj.region_info.bounding_box
					);
					this.calculateFaceLocation(multipleBoxes);

					fetch('http://localhost:3001/image', {
						method: 'put',
						headers: { 'Content-type': 'application/json' },
						body: JSON.stringify({
							id: this.state.user.id
						})
					})
						.then((res) => res.json())
						.then((entryCount) => this.setState(Object.assign(this.state.user, { entries: entryCount })))
						.catch((err) => console.log('Entry count error'));
				}
			})
			.catch((err) => console.log('Error in bounding region'));
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
		if (route === 'signin') {
			this.setState(initialState);
		} else {
			this.setState({ route: route });
		}
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
}

export default App;
