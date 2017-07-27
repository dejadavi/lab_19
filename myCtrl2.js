app=angular.module("myApp");


app.controller('myCtrl2', function($scope, serv1, $location){

    $scope.location;
    $scope.data=serv1.getData()
   
    

});
