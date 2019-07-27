const UserRoutes = require('express').Router()
const UserController = require('../controllers/UserController');

// ROTAS DE USUÁRIOS

UserRoutes.get('/teste', (req, res) => {
    return res.send("Ola mundo");
})

UserRoutes.get('/users', UserController.getAll);
UserRoutes.get('/users/:id', UserController.getById);
UserRoutes.post('/users', UserController.create);
UserRoutes.put('/users/:id', UserController.update);

module.exports = UserRoutes;