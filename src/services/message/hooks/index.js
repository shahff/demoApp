'use strict';

const populateUser = require('./populateUser');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const populateSender = hooks.populate('sentBy', {
  service: 'users',
  field: 'userId'
});

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    
  ],
  find: [],
  get: [],
  create: [populateUser()],
  update: [populateUser()],
  patch: [populateUser()],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
