import React, { Component } from 'react';

class SignIn extends Component {
	constructor (props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value });
	};

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value });
	};

	onSubmit = () => {
		const { email, password } = this.state;
		const { onRouteChange, loadUser } = this.props;
		async function getSignin () {
			const response = await fetch('https://face-recognizer1234-backend.herokuapp.com/signin', {
				method: 'post',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify({
					email: email,
					password: password
				})
			});
			const user = await response.json();
			if (user.id) {
				loadUser(user);
				onRouteChange('home');
			}
		}
		getSignin();
	};

	render () {
		const { onRouteChange } = this.props;
		return (
			<div className='field w-30 center shadow-1 pa3 mt6'>
				<p className='f2 font3 b'>Sign In</p>
				<div className='field'>
					<div className='control has-icons-left '>
						<input
							className='input font3'
							type='email'
							placeholder='Email'
							name='email'
							onChange={this.onEmailChange}
						/>
						<span className='icon is-small is-left'>
							<i className='fas fa-envelope' />
						</span>
					</div>
				</div>
				<div className='field'>
					<div className='control has-icons-left '>
						<input
							className='input font3'
							type='password'
							placeholder='Password'
							name='password'
							onChange={this.onPasswordChange}
						/>
						<span className='icon is-small is-left'>
							<i className='fas fa-lock' />
						</span>
					</div>
				</div>

				<div className='field'>
					<div className='center'>
						<button
							className='button is-outlined is-link font3 b'
							type='submit'
							name='signin'
							value='signin'
							onClick={this.onSubmit}
						>
							Sign In
						</button>
					</div>
				</div>
				<div>
					<p className='font3'>
						<a onClick={() => onRouteChange('register')}>New user? Register here</a>
					</p>
					<p className='help'>
						<a>Forgot password?</a>
					</p>
				</div>
			</div>
		);
	}
}

export default SignIn;
