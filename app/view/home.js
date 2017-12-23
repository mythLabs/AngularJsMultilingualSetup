'use strict';

angular.module('myApp.User', ['ngRoute','pascalprecht.translate'])

.config(['$routeProvider','$translateProvider', function($routeProvider,$translateProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'view/home.html',
    controller: 'HomeCtrl'
  });

  // configures staticFilesLoader
  $translateProvider.useStaticFilesLoader({
    prefix: 'assets/Locales/',
    suffix: '.json'
  });

  $translateProvider.preferredLanguage('en');
}])

.controller('HomeCtrl', ['$translate','$scope',function($translate, $scope) {
    $scope.selectedLanguage='en-US';
    $scope.languages=[
        { value: 'en-US', Text: 'English' },
        { value: 'jp-JP', Text: '日本語' },
        { value: 'fr-FR', Text: 'Français' },
        { value: 'zh-CN', Text: '简体中文' },
        { value: 'zh-HK', Text: '繁體中文' },
        { value: 'ar-AR', Text: 'عربى' },
        { value: 'hi-IN', Text: 'हिंदी' },
        { value: 'tr-TR', Text: 'Türk' },
        { value: 'th-TH', Text: 'ไทย' },
      ];
    $translate.use('en-US');

    $scope.changeLanguage = function () {
        $translate.use($scope.selectedLanguage);
      };
}]);