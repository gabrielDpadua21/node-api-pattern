const UserRepository = require('../repositorys/UserRepository');

class UserController {

    constructor(){}

    async getAll(req, res) {
        const {page = 1} = req.query;

        try {
            const users = await UserRepository.findAll(page);

            return res.status(200).json(users);

        } catch(err) {
            return res.status(400).json({"error": err})
        }
    }

    async create(req, res) {
        try {
            const user = await UserRepository.create(req.body);

            return res.status(200).json(user);
        } catch(err) {
            return res.status(400).json({"error": err});
        }
    }
}

module.exports = new UserController();