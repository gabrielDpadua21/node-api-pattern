const UserRoutes = require('express').Router()
const UserController = require('../controllers/UserController');

// ROTAS DE USUÁRIOS

UserRoutes.get('/teste', (req, res) => {
    return res.send("Ola mundo");
})

UserRoutes.get('/users', UserController.getAll);
UserRoutes.post('/users', UserController.create);

module.exports = UserRoutes;