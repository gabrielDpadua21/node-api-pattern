const express = require('express');
const mongoose = require('mongoose');

class AppController{
    constructor() {
        this.express = express();
        this.mongoose = mongoose;
        
        this.middlewares();
        this.routes();
        this.dataBase();   
    }

    dataBase() {
        this.mongoose.connect('mongodb://0.0.0.0:27017/mybase', {useNewUrlParser: true});
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require('./routes/UserRoutes'))
    }
}

module.exports = new AppController().express;