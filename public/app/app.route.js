angular.module('accountingApp').config(function($routeProvider, $locationProvider){

    $routeProvider.when('/home', {
        templateUrl: 'app/components/home/home.vw.html',
        controller: 'HomeCtrl',
        label: 'Accueil'
    }).when('/login', {
        templateUrl: 'app/components/login/login.vw.html',
        controller: 'LoginCtrl',
        label: 'Connexion',
        css: 'app/components/login/login.stl.css'
    }).otherwise({
        redirectTo: '/home'
    });

});