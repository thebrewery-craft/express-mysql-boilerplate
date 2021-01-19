const express = require('express');
const app = express();
const mysql = require('mysql');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const database = require('./config/database');
const handleErrors = require('./middleware/handleErrors');
const { NotFound } = require('./utils/errors');

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({
  'extended': 'true'
}));
app.use(bodyParser.json());
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
  
const connection = mysql.createConnection(database);
connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      throw new Error('Unable to connect to mysql database')
    }

    console.log('connected to mysql with id: ' + connection.threadId);
});

require('./app/routes')(app);
app.use(function (req, res, next) {
  throw new NotFound('Not Found');
})
app.use(handleErrors);

app.listen(port, ip, () => {
  console.log('Server running on http://%s:%s', ip, port);
});

module.exports = app;