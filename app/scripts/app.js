// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('erdMat', ['ui.router', 'uiGmapgoogle-maps', 'erdMat.controllers', 'erdMat.services'])

.run(function($rootScope) {
	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		console.log('$stateChangeSuccess on ' + toState.name);
	});
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      })

      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
      })

      .state('services', {
        url: '/services',
        templateUrl: 'templates/services.html'
      })

      .state('partners', {
        url: '/partners',
        templateUrl: 'templates/partners.html',
        controller: 'PartnersCtrl'
      })

      .state('map', {
        url: '/map',
        templateUrl: 'templates/map.html',
        controller: 'MapCtrl'
      })

      .state('program', {
        url: '/program',
        templateUrl: 'templates/program.html'
      });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

})
/*
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})
*/
;
