const { Router } = require('express')
const UserRoutes = require('./UserRouter')

const routes = Router()

// Adiciona as rotas do usuário ao roteador principal
routes.use('/users', UserRoutes)

module.exports = routes;