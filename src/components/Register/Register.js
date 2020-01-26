import React from 'react';

const Register = ({ onRouteChange }) => {
	return (
		<div className="field w-30 center shadow-3 pa3 mt6">
			<p className="f2 font3 b">Register</p>
			<div className="field">
				<div className="control has-icons-left ">
					<input className="input font3" type="text" placeholder="Full name" name="fullname" />
					<span className="icon is-small is-left">
						<i className="fas fa-user" />
					</span>
				</div>
			</div>
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

			<div className="field is-grouped is-grouped-centered">
				<div className="control">
					<button
						className="button is-outlined is-link font3 b"
						name="goback"
						value="goback"
						onClick={() => onRouteChange('signin')}
					>
						Go back
					</button>
				</div>
				<div className="control">
					<button
						className="button is-outlined is-link font3 b"
						type="submit"
						name="register"
						value="register"
						onClick={() => onRouteChange('home')}
					>
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
