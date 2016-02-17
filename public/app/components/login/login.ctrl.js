angular.module('accountingApp').controller('LoginCtrl', ['$scope', '$cookies', 'Login', '$location', function($scope, $cookies, Login, $location) {
    $scope.login = function (username, password) {
        var data = Login.do({"username": username,"password": password}, function(){
            if(data.uid != null){
                $cookies.put('uid', data.uid);
                $location.path('/home');
            }
        });
    }
}]);