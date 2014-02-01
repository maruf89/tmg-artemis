'use strict'

myApp = window.myApp

myApp.controller 'tmgSearchCtrl', ['$scope', 'tmgQuery', ($scope, query) ->
    $scope.filterResults = (err, data) ->
        console.log data
        debugger

    $scope.prettySearch = ->
        query.init(this.query, this.filterResults)
]