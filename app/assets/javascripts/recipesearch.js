
var RecipeSearch = angular.module("RecipeSearch", []);

// Create the instant search filter

RecipeSearch.filter('searchFor', function(){

  // All filters must return a function. The first parameter
  // is the data that is to be filtered, and the second is an
  // argument that may be passed with a colon (searchFor:searchString)

  return function(arr, searchString){

    if(!searchString){
      return arr;
    }

    var result = [];

    searchString = searchString.toLowerCase();

    // Using the forEach helper method to loop through the array
    angular.forEach(arr, function(item){

      if(item.name.toLowerCase().indexOf(searchString) !== -1){
        result.push(item);
      }

    });

    return result;
  };

});

// The controller

//function RecipeSearchController($scope){
//  $scope.recipes = [{"persons": 4, "name": "Pasta Bolognese", "description": "Pasta met een saus op tomaten basis"}, {"persons": 2, "name": "Pasta Carbonara", "description": "gdsdgfgds"}, {"persons": 4, "name": "Pizzadeeg voor Big Green Egg", "description": "sdgfgfdgfd"}, {"persons": 2, "name": "Low and Slow Ribs", "description": "fdsfsdsfdfsddf"}];  
// }


RecipeSearch.controller('RecipeCtrl', ['$scope', '$http', function ($scope, $http) {

  $scope.dish = {};

  //$scope.dish = [{"persons": 4, "name": "Pasta Bolognese", "description": "Pasta met een saus op tomaten basis"}, {"persons": 2, "name": "Pasta Carbonara", "description": "gdsdgfgds"}, {"persons": 4, "name": "Pizzadeeg voor Big Green Egg", "description": "sdgfgfdgfd"}, {"persons": 2, "name": "Low and Slow Ribs", "description": "fdsfsdsfdfsddf"}];

  //$scope.dish = '';

 $http({withCredentials: false, method: 'GET', url: 'http://127.0.0.1:3000/recipes.json'})
  .success(function (data) {
      // See here, we are now assigning this username
      // to our existing model!
      $scope.recipes = data;
  })
  .error(function (data, status, headers, config) {

  });
}]);
