const handleRegister = (req, res, knex, bcrypt) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		res.status(400).json('Name, email or password field cannot be empty');
	} else {
		bcrypt.hash(password, null, null, (err, hash) => {
			knex
				.transaction((trx) => {
					trx('signin')
						.insert({
							hash: hash,
							email: email
						})
						.returning('email')
						.then((signinEmail) => {
							return trx('users')
								.insert({
									name: name,
									email: signinEmail[0],
									joined: new Date()
								})
								.returning('*')
								.then((user) => res.json(user[0]));
						})
						.then(trx.commit)
						.catch(trx.rollback);
				})
				.catch((err) => res.status(400).json('Unable to register'));
		});
	}
};

module.exports = { handleRegister };
