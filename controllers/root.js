const handleRoot = (req, res, knex) => {
	knex.select('*').from('users').then((users) => res.json(users));
};

module.exports = { handleRoot };
