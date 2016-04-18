angular.module('erdMat.controllers', ['ngAnimate', 'ui.bootstrap'])

.controller('DashCtrl', function($scope) {

})

.controller('MapCtrl', function($scope) {
    $scope.map = { center: {latitude: 47.4089736, longitude: 18.8892324}, zoom: 14 };
    $scope.marker = {coords: {latitude: 47.4113, longitude: 18.89064}, markerId:'mid'}
})

.controller('PartnersCtrl', function($scope, PartnerSrv) {
    $scope.partners = PartnerSrv.getPartners();
})

.controller("HomeCtrl", function($scope, HomeSrv) {
    $scope.slide = HomeSrv.getSlide();
});



