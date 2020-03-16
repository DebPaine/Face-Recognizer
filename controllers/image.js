const clarifai = require('clarifai');

const app = new Clarifai.App({
	apiKey: '917ae1bc8dd6466699f1f5f13dec6144'
});

const handleAPIcall = (req, res) => {
	app.models
		.predict(Clarifai.FACE_DETECT_MODEL, req.body.url)
		.then((boundingRegions) => res.json(boundingRegions))
		.catch((err) => res.status(400).json('Error from Clarifai API'));
};

const handleImage = (req, res, knex) => {
	const { id } = req.body;
	knex
		.select('entries')
		.from('users')
		.where({ id })
		.increment({ entries: 1 })
		.returning('entries')
		.then((entries) => res.json(entries[0]))
		.catch((err) => res.status(400).json('Unable to get entries'));
};

module.exports = { handleImage, handleAPIcall };
