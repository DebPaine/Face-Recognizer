const express = require('express');
const app = express();
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const root = require('./controllers/root');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const knex = require('knex')({
	client: 'pg',
	connection: {
		connectionString:
			'postgres://pbsdjsaoovning:69092fea006d1ea12633a4ab404561c099267bfa929e0c528d816e0096cce1a8@ec2-46-137-177-160.eu-west-1.compute.amazonaws.com:5432/d5f9sjn6dj7a29',
		ssl: true
	}
});

app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => root.handleRoot(req, res, knex));
app.get('/profile/:userid', (req, res) => profile.handleProfile(req, res, knex));
app.put('/image', (req, res) => image.handleImage(req, res, knex));
app.post('/ClarifaiAPI', (req, res) => image.handleAPIcall(req, res));
app.post('/register', (req, res) => register.handleRegister(req, res, knex, bcrypt));
app.post('/signin', signin.handleSignin(knex, bcrypt));

// Serve static assets  in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('frontend/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
