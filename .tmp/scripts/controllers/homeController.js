define(['./controllers'],function(mod){
  mod.controller('homeController',homeControl);


  function homeControl($scope,$http){
    $http.get('home/posts.json').then(function(data){
      angular.extend($scope, data.data);
    });
    $http.get('home/home.json').then(function(res){
      console.log(res);
    });

    $http({
      url:'home/postData.json',
      method:'post',
      params:{
        key:'test'
      }
    }).then(function(res){
      console.log(res);
    });

  };
  homeControl.$inject = ['$scope','$http'];

});