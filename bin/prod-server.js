import path from 'path';
import express from 'express';
import webpack from 'webpack';
import middleware from '../src/middleware';

const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', middleware);

app.listen(3000, '0.0.0.0', (err) => {
	if(err) {
		console.error(err);
	} else {
		console.info('Listening at http://localhost:3000');	
	}
});
