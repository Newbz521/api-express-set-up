let mongoose = require('mongoose')
let schema = require('./schema')

let Equipment = mongoose.model('Equipment', schema)

module.exports = Equipment