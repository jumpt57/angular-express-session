angular.module('app').run(function($rootScope, $cookies, $location){
    $rootScope.$on('$routeChangeStart', function(event, next, current){

        if($cookies.get('uid') == null){
            $location.path('/login');
        }
        else{
            $location.path('/home');
        }
    });
});