define(['./controllers'],function(mod){
  mod
    .controller('contactController',contactControl);


  function contactControl($scope,$http){

    $scope.contactForm = {};
    $scope.contactErrors = false ;
    $scope.contactErrorsMsg = '';

    $http.get('home/contact.json').then(function(data){
      angular.extend($scope, data.data);
    });
  

  $scope.sendInfo = function(){
    void(0);
    console.log('Function for sending a message');
  }

  $scope.setValue = function(field){
    if (!field.value || 0 === field.value.length  && field.required === true){
      field.invalid = true;
      $scope.contactErrors = true;      
      $scope.contactErrorsMsg = field.message;
      console.log('Field: ' + field.name +  ' contains an Invalid Value');
    }else{
      $scope.contactErrors = false;  
      $scope.contactErrorsMsg = '';          
      field.invalid = false;
    }
    
  }

  $scope.setRequired = function(field){
    if (typeof field.required !=='undefined' && field.required === true){
      return true;
    }else{
      return false;  
    }
    
  }

  };

  
  contactControl.$inject = ['$scope','$http'];
});