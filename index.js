const path         = require('path');
const express      = require('express');
const morgan       = require('morgan');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const multer       = require('multer');

const app = express();

// MIDDLEWARE ==================================================================

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
// TODO: Use multer.

// ROUTES ======================================================================

app.use('/client',  express.static(path.join(__dirname, 'client/dist/')));
app.use('/manager', express.static(path.join(__dirname, 'manager/dist/')));

app.listen(3000);
