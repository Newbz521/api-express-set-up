let mongoose = require('mongoose')

let equipmentSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  warranty: Boolean
})

module.exports = equipmentSchema