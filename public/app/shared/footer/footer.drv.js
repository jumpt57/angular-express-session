angular.module('app').directive('ngFooter', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: {
        },
        templateUrl: 'app/shared/footer/footer.vw.html'
    };
});