const handleSignin = (knex, bcrypt) => (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		res.status(400).json('Email or password field cannot be empty');
	} else {
		knex
			.select('hash', 'email')
			.from('signin')
			.where({
				email: email
			})
			.then((signin_User) =>
				bcrypt.compare(password, signin_User[0].hash, (err, result) => {
					if (result) {
						knex
							.select('*')
							.from('users')
							.where({
								email: email
							})
							.then((users_User) => {
								res.json(users_User[0]);
							});
					} else {
						res.status(400).json('Error signing in');
					}
				})
			)
			.catch((err) => res.status(400).json('Wrong credentials'));
	}
};

module.exports = { handleSignin };
