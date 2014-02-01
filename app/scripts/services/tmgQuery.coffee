'use strict'

myApp = window.myApp

myApp.service 'tmgQuery', ['$http', ($http) ->
    init: (query, callback) ->
        $http.get('/api/search?query=' + query)
            .success(callback.bind(null, null))
            .error(callback);
]