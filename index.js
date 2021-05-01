// IMPORTS
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const file_upload = require('express-fileupload')
const path = require('path')

// LOCALES
const sequelize = require('./database')
const models = require('./models/tables')
const router = require('./routes/index')
const error_handler = require('./middleware/error_handler')


// CONSTANTS
const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(file_upload({}))
app.use('/api', router)



// ERROR_HANDLER
app.use(error_handler)

// app.get('/', (req, res) => {
//     res.status(200).json({message: "WORK!!"})
// })


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
