const jwt = require('jsonwebtoken');
const auth = require('../config/auth');

class TokenJWT {
    constructor() { }

    generateToken(_id) {
        return jwt.sign({ id: _id }, auth.secret, {
            expiresIn: 86400
        })
    }
}

module.exports = new TokenJWT()