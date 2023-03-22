require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const sequelize = require('./api/db')
const app = express()
app.use(morgan('dev'))
const router = require('./api/routes')
app.use(express.json())
app.use('/api', router)

app.listen(process.env.PORT, async (err) => {
    if (err) throw new Error(`ERROR: Cannot run server on port ${process.env.PORT}`)
    console.log(`Port ${process.env.PORT} Connected`)

try{
    await sequelize.authenticate()
    await sequelize.sync({alter: true})
    console.error('Conection succefull')

}catch(error){
    console.error('ERROR: Unable to connect to the database')
}
})


