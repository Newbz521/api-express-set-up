let express = require('express')

let app = express()

app.use(express.json())

let router = require('./router')
app.use(router)

const PORT = 9000
app.listen(PORT)

// server.on('listening', () => console.log("Listening on port " + ))