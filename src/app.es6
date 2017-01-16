import express from 'express';
import fs from 'fs';
import renderViewMiddleware from './middleware/renderView'

// init the app
const app = express();

// setup static files, server browser.js (webpacked file) from root
app.use(express.static(__dirname));

app.get('/recipes', (req, res) => {
  // Read and open the recipes json file
  fs.readFile(`${__dirname}/../data/recipes.json`, 'utf8', (err, data) => {

    // Error handling - return an error
    if (err) {
      res.status(500).end();
      return console.error(err);
    }
    let recipes = JSON.parse(data);
    res.status(200).send({recipes});

  });
});

app.get('/featured', (req, res) => {
  // Read and open the featured recipe json file
  fs.readFile(`${__dirname}/../data/featured.json`, 'utf8', (err, data) => {

    // Error handling - return an error
    if (err) {
      res.status(500).end();
      return console.error(err);
    }
    let recipe = JSON.parse(data);
    res.status(200).send({recipe});

  });
});

// handle the isomorphic page render
app.get('/', renderViewMiddleware);

// start the app
app.listen(3000, () => {
  console.log('App listening on port: 3000');
});
