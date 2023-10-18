const { Router } = require('express')
const UserController = require('../controllers/user/UserController')

const UserRoutes = Router()

UserRoutes.post("/user", UserController.create);

module.exports = UserRoutes;