angular.module('app').directive('ngHeader', ['$location', '$anchorScroll', function($location, $anchorScroll){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            cards: '='
        },
        templateUrl: 'app/shared/header/header.vw.html',
        link: function(scope, element, attrs){

            scope.gotoAnchor  = function(anchor){
                $location.hash(anchor);
                $anchorScroll();
            }

        }
    };
}]);