const express = require('express')
const routes = require('./routes/Routes')

const App = express();

App.use(express.json());
App.use(routes);

module.exports = App;