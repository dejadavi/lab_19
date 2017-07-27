var app=angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider){

$routeProvider
    .when("/",{
        controller:"myCtrl1",
        templateUrl:"inputPartial.html"
    })
    .when("/results",{
        controller:"myCtrl2",
        templateUrl:"outputPartial.html"
    })
    .otherwise({
        templateUrl:"404.html"
    })
});
