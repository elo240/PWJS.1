var portfolioApp = angular.module('portfolioApp', [])
portfolioApp.controller('CaruzelListCtrl', function ($scope, $http) {
    $http.get('./img/galleries.json').then(function (response) {
        $scope.caruzelItems = response.data.caruzelItems;
    });
});
portfolioApp.controller('GalleryListCtrl', function ($scope, $http) {
    $http.get('./img/galleries.json').then(function (response) {
        $scope.galleries = response.data.galleries;
        $scope.sortList = response.data.sortList;
        $scope.orderProp = $scope.sortList[1];
    });
    $scope.title = 'My gallery';

    //    Zablokowano żądanie do zasobu innego pochodzenia: zasady „Same Origin Policy” nie pozwalają wczytywać zdalnych zasobów z „file:///C:/Users/User/Documents/server/jezyki%20skryptowe/lab7/galleries.json” (żądanie CORS inne niż HTTP).

});
