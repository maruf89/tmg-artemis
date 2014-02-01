"use strict"

request     = require('request')
url         = require('url')
_           = require('lodash')

###*
 * Store all the search variables here
 * @type {object}
###
vars = require("#{process.cwd()}/lib/config/search.json")

searchBase  = null
host        = vars.API_URL

_buildBase = (params) ->
    base = []

    _.each params, (val, key) ->
        base.push("#{key}=#{val}")

    return base.join('&')

_appendQuery = ->
    return [].slice.call(arguments).join('&')


###*
 * Search this MoFo'in shizow
###
exports.search = (req, res) ->
    query = _.extend({q: req.query.query}, vars.query)
    url = vars.API_URL + '?' + _buildBase(query)

    request {
        uri: url
        method: 'GET'

    }, (err, _res, body) ->
        res.send(body)

searchBase = _buildBase(vars.query)