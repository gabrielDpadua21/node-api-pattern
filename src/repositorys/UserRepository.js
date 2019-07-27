const mongoose = require('mongoose');
const UserSchema = require('../models/UserSchema');

class UserRepository {
    constructor() {
        this.model = mongoose.model('user', UserSchema);
    }

    findAll(page) {
        return this.model.paginate({}, {page: page, limit: 10})
    }

    create(user) {
        return this.model.create(user)
    }
}

module.exports = new UserRepository;