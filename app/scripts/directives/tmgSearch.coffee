"use strict"

myApp = window.myApp

myApp.directive 'tmgSearch', [ ->
    restrict: 'EA'
    replace: true
    templateUrl: 'partials/search',
    controller: 'tmgSearchCtrl'
]