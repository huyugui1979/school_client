// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('starter', ['ionic','starter.controllers','baiduMap'])

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('tab', {
    url: "/tab",
    abstract:true,
    templateUrl: 'template/tab.html'
    //onEnter: function ($state) {
    //    //User.checkSession().then(function (hasSession) {
    //  $state.go('login');
    //    //});
    //}
  }).state('tab.home', {
    url: '/home',
    views: {
      home: {
        templateUrl: 'template/home.html',
        controller: 'HomeCtrl'
      }
    }


  })

  .state('login',{
        url: '/login',
        templateUrl: 'template/login.html',
        controller: 'LoginCtrl'
      })

  .state('tab.help', {
    url: '/help',
    views: {
      help: {
        templateUrl: 'template/help.html',
        controller: 'HelpCtrl'
      }
    }
  })
  ;
  $urlRouterProvider.otherwise('/login');

})