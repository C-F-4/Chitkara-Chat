var indexApp = angular.module("indexApp", ["signupApp", "loginApp", "contactApp"]);

var signupApp = angular.module("signupApp", []);
signupApp.controller("RegisterCtrl", function ($scope) {
    $scope.user = {};
    $scope.validate = function(user) {
        console.log($scope.user);
        // check if University ID or Email is already in the database
    }
});

var loginApp = angular.module("loginApp", []);
loginApp.controller("LoginCtrl", function ($scope) {
    $scope.master = {};
    $scope.validate = function(master) {
        console.log($scope.master);
        // Test if Email ID and password matches as in the database
    }
});

var contactApp = angular.module("contactApp", []);
contactApp.controller("ContactCtrl", function ($scope) {
    $scope.guest = {};
    $scope.validate = function(guest) {
        console.log($scope.guest);
        // Mailer function
    }
});

var sectionSignup = document.getElementById("signup-app");
var sectionLogin = document.getElementById("login-app");
var sectionContact = document.getElementById("contact-app");

angular.element(document).ready(function() {
   angular.bootstrap(sectionSignup, ['signupApp']);
   angular.bootstrap(sectionLogin, ['loginApp']);
   angular.bootstrap(sectionContact, ['contactApp']);
});