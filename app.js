require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const moment = require('moment');
app.locals.moment = moment;

// Static files & view engine
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', require('./routes/news'));

app.listen(port, () => console.log(`Server started on port ${port}`));
