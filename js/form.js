var myApp1 = angular.module("myApp1", []);
myApp1.controller("RegisterCtrl", function ($scope) {

});

var myApp2 = angular.module("myApp2", []);
myApp2.controller("LoginCtrl", function ($scope) {

});

var myApp3 = angular.module("myApp3", []);
myApp3.controller("ContactCtrl", function ($scope) {

});

var myApp = angular.module("myApp", ["myApp1", "myApp2", "myApp3"]);