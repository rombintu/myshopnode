// IMPORTS
require('dotenv').config()
const express = require('express')
const cors = require('cors')

// LOCALES
const sequelize = require('./database')
const models = require('./models/tables')

// CONSTANTS
const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: "WORK!!"})
})


// MAIN
async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`SERVER: http://localhost:${PORT}`)
        })
    } catch (err) {
        console.log(`ERROR: ${err}`)
    }
}

start()
