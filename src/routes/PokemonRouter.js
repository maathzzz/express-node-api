const { Router } = require('express')

const pokeRoutes = Router()

pokeRoutes.get('/pokemon', (req, res) => {
    res.send('Estou respondendo a uma requisição GET em /pokemon')
    res.status(200).json()
})