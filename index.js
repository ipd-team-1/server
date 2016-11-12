const path         = require('path');
const express      = require('express');
const morgan       = require('morgan');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const multer       = require('multer');

const app = express();

// Middleware.
app.use(morgan('combined'));
app.use('/', express.static(path.join(__dirname, 'client/dist/')))
app.use(bodyParser.urlencoded({ extended: false }));
// TODO: Use multer.

app.listen(3000);
