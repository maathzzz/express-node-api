const express = require('express')
const database = require('./infra/database')
const { DATABASE_URL, PORT } = require('./config/env/environment')

const app = express()

database.open(DATABASE_URL).then(() => {
    const server = app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${server.address().port}`)
    })
}).catch(error => console.log(error))