let express = require('express');
let fs = require('fs');
let path = require('path');

// init the app
const app = express();

// setup static files, server browser.js (webpacked file) from root
app.use(express.static(path.join(__dirname, 'examples')));

// start the app
app.listen(3050, () => {
  console.log('App listening on port: 3050');
});
