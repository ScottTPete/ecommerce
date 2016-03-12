angular.module('eCommerceApp')
	.controller('mainController', function($scope, mainService) {
		
	 mainService.getProducts().then(function(response) {
		 $scope.products = response.data;
	});
			
	$scope.addProduct = function(product) {
		mainService.addProduct(product);
	}
	
	$scope.removeProduct = function(id) {
		mainService.removeProduct(id);
	}
	
})