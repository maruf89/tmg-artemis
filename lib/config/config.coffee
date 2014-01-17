"use strict"
_ = require("lodash")

###
Load environment configuration
###
module.exports = _.extend(
    require('./env/all'),
    require("./env/#{process.env.NODE_ENV}") or {}
)