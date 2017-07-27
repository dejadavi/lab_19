app=angular.module("myApp");


app.service("serv1",function($http){


    var lat;
    var lng;
    var data;
    this.data={};

this.setData=function(location){
  return $http({
    method: "GET",
    url:"https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key=AIzaSyB1vrdYp8rGes4BvAIyWO2o5frtfUpzWU4"})
    .then(function(object){
       lat=object.data.results[0].geometry.location.lat;
       lng=object.data.results[0].geometry.location.lng;
    //   console.log("https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key=AIzaSyB1vrdYp8rGes4BvAIyWO2o5frtfUpzWU4");
      console.log(location);
      console.log(lat);
      console.log(lng);
    }).then(function(object){
        $http({
          method:"GET",
          url:"https://simple-weather.p.mashape.com/weather?lat="+lat+"&lng="+lng,
          headers:{
                "X-Mashape-Key": "cOtxoziPy7msh7Rs2YEbsXcmf1eKp1AcRdgjsnNJryGWCVqKsV",
                "Accept": "text/plain"
            }
    }).then(function(dataFinal){
     
            return dataFinal;
            //console.log(this.data);
        });
    });
};

this.getData=function(){
    
    console.log(data);
    return this.data;


};



});
