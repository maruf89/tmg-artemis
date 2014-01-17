'use strict'
express         = require('express')
path            = require('path')
config          = require('./config')
path            = require('path')
redis           = require('redis')
RedisStore      = require('connect-redis')(express)
stylus          = require('stylus')
nib             = require('nib')

stylusCompile = (str, path) ->
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib())

###
Express configuration
###
module.exports = (app) ->
  #console.log(stylus)
  app.configure 'development', ->
    @use require('connect-livereload')()
    
    # Disable caching of scripts for easier testing
    @use noCache = (req, res, next) ->
      if req.url.indexOf('/scripts/') is 0
        res.header 'Cache-Control', 'no-cache, no-store, must-revalidate'
        res.header 'Pragma', 'no-cache'
        res.header 'Expires', 0
      next()

    @use express.static(path.join(config.root, '.tmp'))
    @use express.static(path.join(config.root, 'app'))
    @use express.errorHandler()
    @use express.logger('dev')
    @set 'views', config.root + '/app/views'

  app.configure 'production', ->
    @use express.favicon(path.join(config.root, 'public', 'favicon.ico'))
    @use express.static(path.join(config.root, 'public'))
    @set 'views', config.root + '/views'

  app.configure ->
    @engine 'html', require('ejs').renderFile
    @set 'view engine', 'html'
    @use express.bodyParser()
    @use express.methodOverride()
    @use express.cookieParser('keyboardcat') # 'some secret key to sign cookies'
    @use express.compress()
    @use express.session
      store: new RedisStore(
          host: 'localhost'
          port: 6379
      ),
      secret: 'ntah,9e8gu2ntho#@ nta !'

    @use require('connect-asset')(
      assets: path.resolve config.root
      public: path.resolve(config.root, '.tmp')
      buidls: true
    )
    @use stylus.middleware(
      src: path.resolve(config.root, '.tmp')
      compile: stylusCompile
    )
    
    # Router needs to be last
    @use app.router
