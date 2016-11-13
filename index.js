const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const multer = require('multer');

require('./db');

const app = express();

// MIDDLEWARE ==================================================================

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// TODO: Use multer.

// ROUTES ======================================================================

app.use('/client', express.static(path.join(__dirname, 'client/dist/')));
app.use('/manager', express.static(path.join(__dirname, 'manager/dist/')));

app.use('/api/images', require('./routes/images'));

app.listen(process.env.PORT || 3000);
