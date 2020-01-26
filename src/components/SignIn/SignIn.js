import React from 'react';

const SignIn = ({ onRouteChange }) => {
	return (
		<div className="field w-30 center shadow-3 pa3 mt6">
			<p className="f2 font3 b">Sign In</p>
			<div className="field">
				<div className="control has-icons-left ">
					<input className="input font3" type="email" placeholder="Email" name="email" />
					<span className="icon is-small is-left">
						<i className="fas fa-envelope" />
					</span>
				</div>
			</div>
			<div className="field">
				<div className="control has-icons-left ">
					<input className="input font3" type="password" placeholder="Password" name="password" />
					<span className="icon is-small is-left">
						<i className="fas fa-lock" />
					</span>
				</div>
			</div>

			<div className="field">
				<div className="center">
					<button
						className="button is-outlined is-link font3 b"
						type="submit"
						name="signin"
						value="signin"
						onClick={() => onRouteChange('home')}
					>
						Sign In
					</button>
				</div>
			</div>
			<div>
				<p className="font3">
					<a onClick={() => onRouteChange('register')}>New user? Register here</a>
				</p>
				<p className="help">
					<a>Forgot password?</a>
				</p>
			</div>
		</div>
	);
};

export default SignIn;
