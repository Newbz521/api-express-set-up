let express = require('express')
let router = new express.Router()

let equipmentRouter = require('./equipment/router')
router.use("/equipment", equipmentRouter)

module.exports = router