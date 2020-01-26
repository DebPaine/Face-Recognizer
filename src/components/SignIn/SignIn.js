import React from 'react';

const SignIn = ({ onRouteChange }) => {
	return (
		<div className="field w-30 center shadow-3 pa3 mt6">
			<p className="f2 font3 b">Sign In</p>
			<div className="field">
				<div className="control has-icons-left ">
					<input className="input font3" type="email" placeholder="Email" />
					<span className="icon is-small is-left">
						<i className="fas fa-envelope" />
					</span>
				</div>
			</div>
			<div className="field">
				<div className="control has-icons-left ">
					<input className="input font3" type="text" placeholder="Password" />
					<span className="icon is-small is-left">
						<i class="fas fa-lock" />
					</span>
				</div>
			</div>

			<div className="field">
				<div className="center">
					<button className="button is-outlined is-link font3 b" onClick={() => onRouteChange('home')}>
						Sign In
					</button>
				</div>
			</div>
			<p className="font3">
				<a onClick={() => onRouteChange('register')}>New user? Register here</a>
			</p>
		</div>
	);
};

export default SignIn;
