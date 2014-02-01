"use strict"
api = require("./controllers/api")
index = require("./controllers")

###
Application routes
###
module.exports = (app) ->
  
  # Server API Routes
  # app.get "/api/awesomeThings", api.awesomeThings
  
  # All other routes to use Angular routing in app/scripts/app.js
  app.get "/partials/*", index.partials
  app.get "/api/search", api.search
  app.get "/*", index.index