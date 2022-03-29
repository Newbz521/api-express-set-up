// Import Mongoose
let mongoose = require('mongoose')

// Connect to database
const DATABASE_NAME = 'snwbrdr'
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(`mongodb://127.0.0.1:27017/${DATABASE_NAME}`, mongooseConfig)

// Event Listeners for Mongoose

mongoose.connection.on('connected', () => console.log("Connected to database"))
mongoose.connection.on('disconnected', () => console.log("Disconnected to database"))
mongoose.connection.on('error', () => console.error("Database errorc", error))