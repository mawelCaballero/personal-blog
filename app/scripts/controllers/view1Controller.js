define(['./controllers'],function(mod){
  mod
    .controller('view1Controller',view1Control)
    ;


  
  function view1Control($scope){
    $scope.message = 'view1';
  };


  view1Control.$inject = ['$scope'];

});