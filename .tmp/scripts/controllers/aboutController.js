define(['./controllers'],function(mod){
  mod.controller('aboutController',aboutControl);


  function aboutControl($scope,$http){
    
    $http.get('home/about.json').then(function(data){
      angular.extend($scope, data.data);
    });
  };
  
  aboutControl.$inject = ['$scope','$http'];
});