const express = require('express'); //imports express
const bodyParser = require('body-parser');
const path = require('path'); //imports path

const app = express(); //creates an express app object
const port = process.env.PORT || 4000;  // use env var or default to 4000

app.use(bodyParser.json());

// Set the static directory to serve files from
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

//start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log("staticDir: " + staticDir);
});