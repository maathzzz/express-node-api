const database = require('./infra/database')
const { DATABASE_URL, PORT } = require('./config/env/environment')
const App = require('./app')

database.open(DATABASE_URL).then(() => {
    console.log("passou aqui")
    App.listen(PORT, () => {
        console.log('Server Running 🚀')
    })
}).catch(error => console.log(error))