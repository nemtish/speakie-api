import express from 'express';
import bodyParser from 'body-parser';
import routes from './framework/routes/index.js';
import projectDependencies from './config/index.js'
// initialize our express app
const app = express();
const port = process.env.PORT || 8000;

projectDependencies.DatabaseService.initDatabase().then(() => {

	// CORS config
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		if (req.method === "OPTIONS") {
			res.sendStatus(200);
		} else {
			next();
		}
	});

	// Allow JSON parsing from req body
	app.use(bodyParser.json({ limit: '50mb', extended: true }));
	app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

	// load routes
	app.route('/').get((req, res) => res.send('API is running'))
    app.use('/api/v1', routes(projectDependencies));
	// app.use('/api/v1/audio', audioRoutes)

	app.listen(port, () => {
		console.log('Server is up and running on port number ' + port)
	});

}, (err) => {
    console.log(`db is not ready, err:${err}`);
})

export default app
