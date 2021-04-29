// IMPORTS
require('dotenv').config()
const express = require('express')

// LOCALES
const sequelize = require('./database')

// CONSTANTS
const PORT = process.env.PORT || 5000
const app = express()

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
