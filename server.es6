import express from 'express';
import fs from 'fs';

// init the app
const app = express();

app.get('/recipes', (req, res) => {
  // Read and open the recipes json file
  fs.readFile(`${__dirname}/data/recipes.json`, 'utf8', (err, data) => {

    // Error handling - return an error
    if (err) {
      res.status(500).end();
      return console.log(err);
    }
    let recipes = JSON.parse(data);
    res.status(200).send({recipes});

  });
});

// start the app
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
