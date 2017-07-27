app=angular.module("myApp");

app.controller('myCtrl1', function($scope, serv1, $location){

    $scope.location;
    $scope.setData=function(){
       // console.log("Getting?")
        serv1.setData($scope.location)
        .then( function(data){
            $location.path("/results")}
        
        );
       
};


});