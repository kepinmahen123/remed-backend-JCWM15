const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const {salesRouter, clientRouter} = require("./router")

// main app
const app = express()
const port = 2000

// apply middleware
app.use(cors())
app.use(bodyparser.json())

// main route
const response = (req, res) => res.status(200).send('<h1>REST API JCWM15</h1>')
app.get('/', response)

app.use('/sales', salesRouter)
app.use('/client', clientRouter)


// bind to local machine
const PORT = process.env.PORT || 2000
app.listen(PORT, () => console.log(`CONNECTED : port ${PORT}`))