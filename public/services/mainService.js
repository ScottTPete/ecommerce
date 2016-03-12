angular.module('eCommerceApp')
	.service('mainService', function($http) {
		
	this.getProducts = function() {
		return $http({
			method: 'GET',
			url: '/api/products',
		})
	}
	
	this.addProduct = function(product) {
		return $http({
			method: 'POST',
			url: '/api/products',
			data: product
		})
	}
		
	this.removeProduct = function(id) {
		return $http({
			method: 'DELETE',
			url: '/api/products/' + id
		})
	}
		
})