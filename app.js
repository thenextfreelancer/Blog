angular
	.module('myApp', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise('/');
		$stateProvider
		.state('home', {
			name: 'home',
			url: '/',
			templateUrl: 'app/tpl/main.html'
		})
		.state('about', {
			name: 'about',
			url: '/about',
			templateUrl: 'app/tpl/about.html'
		})
		.state('contact', {
			name: 'contact',
			url: '/contact',
			templateUrl: 'app/tpl/contact.html'
		})
		.state('single', {
			name: 'single',
			url: '/content',
			templateUrl: 'app/tpl/single.html'
		})
		.state('work', {
			name: 'work',
			url: '/experience',
			templateUrl: 'app/tpl/work.html'
		});
		
	}).run(function($rootScope, $state){
        
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
        	 
        });
	});