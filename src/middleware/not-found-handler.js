'use strict';

const path = require('path');
const serveStatic = require('feathers').static;
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const errors = require('feathers-errors');

const app = feathers();

app.configure(configuration(path.join(__dirname, '../../')));

module.exports = function() {
  return function(req, res, next) {

    //next(new errors.NotFound('Page not found'));
    let clientPath = path.join(app.get('public'), 'index.html');
    //console.log(clientPath);
    res.sendFile(clientPath);
  
  };
};
