import React, { Component } from 'react';

class Register extends Component {
	constructor (props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		};
	}

	onNameChange = (event) => {
		this.setState({ name: event.target.value });
	};

	onEmailChange = (event) => {
		this.setState({ email: event.target.value });
	};

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value });
	};

	onRegister = () => {
		const { name, email, password } = this.state;
		fetch('/register', {
			method: 'post',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				name: name,
				email: email,
				password: password
			})
		})
			.then((res) => res.json())
			.then((user) => {
				if (user.id) {
					this.props.loadUser(user);
					this.props.onRouteChange('home');
				}
			});
	};

	render () {
		const { onRouteChange } = this.props;
		return (
			<div className='authwidth field center shadow-3 pa3 mt6'>
				<p className='f2 font3 b'>Register</p>
				<div className='field'>
					<div className='control has-icons-left '>
						<input
							className='input font3'
							type='text'
							placeholder='Full name'
							name='fullname'
							onChange={this.onNameChange}
						/>
						<span className='icon is-small is-left'>
							<i className='fas fa-user' />
						</span>
					</div>
				</div>
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

				<div className='field is-grouped is-grouped-centered'>
					<div className='control'>
						<button
							className='button is-outlined is-link font3 b'
							name='goback'
							value='goback'
							onClick={() => onRouteChange('signin')}
						>
							Go back
						</button>
					</div>
					<div className='control'>
						<button
							className='button is-outlined is-link font3 b'
							type='submit'
							name='register'
							value='register'
							onClick={this.onRegister}
						>
							Register
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
