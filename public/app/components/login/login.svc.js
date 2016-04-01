angular.module('app')
    .factory('Login', ['$resource', '$http', function($resource){
        return $resource('/server-login', {}, {
            do: {method: 'POST'}
        });
    }]);