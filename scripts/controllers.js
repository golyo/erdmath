angular.module('erdMat.controllers', ['ngAnimate', 'ui.bootstrap'])

.controller('DashCtrl', function($scope) {

})

.controller('MapCtrl', function($scope, HomeSrv) {
    var coordinates = HomeSrv.getData().coords;
    $scope.marker = {coords: coordinates, markerId:'mid'}
    $scope.map = { center: {latitude: coordinates.latitude, longitude: coordinates.longitude}, zoom: 14 };
})

.controller('PartnersCtrl', function($scope, PartnerSrv) {
    $scope.partners = PartnerSrv.getPartners();
    $scope.sponsors = PartnerSrv.getSponsors();
})

.controller('ProgramCtrl', function($rootScope, $scope, $sce) {
})

.controller("HomeCtrl", function($scope, HomeSrv) {
    $scope.slide = HomeSrv.getSlide();
    $scope.data = HomeSrv.getData();
});



