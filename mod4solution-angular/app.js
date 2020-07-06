
(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "";
 $scope.length = 0;
$scope.feedYaakov = function () {
    var totalNameValue = checkcount($scope.name);
    $scope.totalValue = totalNameValue;
  };
  
   function checkcount(string) {
   var length = string.split(",").length;
   if ($scope.name.length === 0 )
 {
$scope.length = $scope.name.length;	
  var totalNameValue =  "Enter first";
  $scope.class1="red";
  return totalNameValue;
 }
 else if(length > 3 )
 {
	 $scope.length = $scope.name.length;	
  var totalNameValue =  "Too much!";
   $scope.class1="red";
   return totalNameValue;
 }
 else{
	 $scope.length = $scope.name.length;	
	var totalNameValue =  "Enjoy"; 
	 $scope.class1="green";
	 return totalNameValue;
 }
  };

 
}


})();
