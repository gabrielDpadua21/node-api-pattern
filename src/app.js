'use strict';

require('dotenv').config({
    path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
})

const express = require('express');
const mongoose = require('mongoose');
const database = require('./config/database');

class AppController {
    constructor() {
        this.express = express();
        this.mongoose = mongoose;

        this.middlewares();
        this.routes();
        this.dataBase();
    }

    dataBase() {
        this.mongoose.connect(`mongodb://${database.host}:${database.port}/${database.base}`, { useNewUrlParser: true });
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require('./routes/UserRoutes'))
    }
}

module.exports = new AppController().express;