import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public')); //express static middleware to serve public catalog
app.set('view engine', 'ejs');//set ejs as a templating language

app.get('/', (req, res) => {
  res.render('index', {answer : 42} ); //pass a variable to index to use it there
}); //on response, render index.js

app.listen(config.port, function listenHandler() {
  console.log(`running on ${config.port}...`);
});
