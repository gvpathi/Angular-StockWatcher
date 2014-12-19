'use strict';

// This filter makes the assumption that the input will be in decimal form (i.e. 17% is 0.17):
angular.module('myApp.StockListPercentageFilter', [])
	.filter('percentage', ['$filter', function($filter) {
		return function (input, decimals) {
			var number = $filter('number')(input * 100, decimals);
			var formattedPercent = (number > 0 ? '+' : '') + number + '%';
			
			return formattedPercent;
		};
	}]);