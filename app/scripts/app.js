'use strict';

/**
 * @ngdoc overview
 * @name visjsTimeline
 * @description
 * # visjsTimeline
 *
 * Main module of the application.
 */
angular
  .module('visjsTimeline', [
    'ngResource',
    'ngRoute',
    'ngVis'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
