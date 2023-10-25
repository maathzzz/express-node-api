const app = require('./app')
const database = require('./infra/database')
const { DATABASE_URL, PORT } = require('./config/env/environment')

database.open(DATABASE_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running 🚀 on port ${PORT}`)
    })
}).catch(error => console.log(error))
