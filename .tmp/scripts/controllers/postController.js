define(['./controllers'],function(mod){
  mod.controller('postController',postControl);


  function postControl($rootScope,$scope,$http){

    $scope.postId = $rootScope.idPost;
    console.log('ID Post: ' + $scope.postId +  ' ');
    
    $http.get('home/post.json').then(function(data){
        angular.extend($scope, data.data);
      });
    };


    postControl.$inject = ['$scope','$http'];

});