angular.module('eCommerceApp', ['ui.router'])
	.config(function ($urlRouterProvider, $stateProvider) {
		$stateProvider
			.state('products', {
				url: '/products',
				templateUrl: 'templates/product.html',
				controller: 'mainController'
			})
			.state('admin', {
				url: '/admin',
				templateUrl: 'templates/admin.html',			
				controller: 'mainController'
			})
		
		$urlRouterProvider.otherwise('/products');
})