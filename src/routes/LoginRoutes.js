'use strict';

const LoginRoutes = require('express').Router()
const LoginController = require('../controllers/LoginController');

LoginRoutes.post('/login', LoginController.LoginAutenticate);


module.exports = LoginRoutes;