'use strict'

angular.module('artemisSearchApp')
  .controller 'NavbarCtrl', ($scope, $location) ->
    $scope.menu = [
      title: 'Home'
      link: '/'
    ]
    
    $scope.isActive = (route) ->
      route is $location.path()