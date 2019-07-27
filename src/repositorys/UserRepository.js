const mongoose = require('mongoose');
const UserSchema = require('../models/UserSchema');

class UserRepository {
    constructor() {
        this.model = mongoose.model('user', UserSchema);
    }

    findAll(page) {
        return this.model.paginate({}, {page: page, limit: 10});
    }

    findById(_id) {
        return this.model.findById(_id);
    }

    create(collection) {
        return this.model.create(collection);
    }

    update(_id, collection) {
        return this.model.findByIdAndUpdate(_id, collection, {new: true});
    } 
}

module.exports = new UserRepository;