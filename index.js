const express      = require('express');
const morgan       = require('morgan');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const multer       = require('multer');

const app = express();

// Middleware.
app.use(morgan('combined'));
app.use(express.static('client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
// TODO: Use multer.

app.get('/', function(req, res) {
  res.send("GET request to homepage");
});

app.listen(3000);
