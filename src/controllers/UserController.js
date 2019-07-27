const UserRepository = require('../repositorys/UserRepository');
const TryCatch = require('../utils/TryCatch');

class UserController {

    constructor(){}

    async getAll(req, res) {
        const {page = 1} = req.query;

        return TryCatch
                    .tryAwait(UserRepository.findAll(page), res);
    }

    async getById(req, res) {
        return TryCatch
                    .tryAwait(UserRepository.findById(req.params.id), res);    
    }

    async create(req, res) {
        return TryCatch
                    .tryAwait(UserRepository.create(req.body), res);
    }
    
    async update(req, res) {
        return TryCatch
                    .tryAwait(UserRepository.update(req.params.id, req.body), res);
    } 
}

module.exports = new UserController();
