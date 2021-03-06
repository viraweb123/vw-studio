/* 
 * The MIT License (MIT)
 * 
 * Copyright (c) 2016 weburger
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


/**
 * @ngdoc Directives
 * @name mb-mini-action-anchor
 * @description produces top toolbar for the module in editing mode.
 */
angular.module('vwStudio').directive('mbMiniActionAnchor', function ($actions) {

	return {
		templateUrl: 'views/directives/mb-mini-action-anchor.html',
		restrict: 'E',
		replace: true,
		scope: {
			mbActionGroup: '@?',
			mbDivider: '<?',
			mbSize: '<?'
		},
		/*
		 * @ngInject
		 */
		controller: function($scope){
			var ctrl = this;
			
			function updateItems(){
				var value = $scope.mbActionGroup;
				if(value){
					ctrl.group = $actions.group($scope.mbActionGroup);
				} else {
					ctrl.group = {};
				}
			}
			
			$scope.$watch('mbActionGroup', updateItems);
			$scope.$on('destroy', function(){
				$actions.off('actionsChanged', updateItems);
				$actions.off('groupsChanged', updateItems);
			});
		},
		controllerAs: 'ctrl'
	};
});

angular.module('vwStudio').directive('mbMenuItemActionAnchor', function ($actions) {

	return {
		templateUrl: 'views/directives/mb-menu-item-action-anchor.html',
		restrict: 'E',
		replace: true,
		scope: {
			mbActionGroup: '@?',
			mbDivider: '<?',
			mbSize: '<?'
		},
		/*
		 * @ngInject
		 */
		controller: function($scope){
			var ctrl = this;
			
			function updateItems(){
				var value = $scope.mbActionGroup;
				if(value){
					ctrl.group = $actions.group($scope.mbActionGroup);
				} else {
					ctrl.group = {};
				}
			}
			
			$scope.$watch('mbActionGroup', updateItems);
			$scope.$on('destroy', function(){
				$actions.off('actionsChanged', updateItems);
				$actions.off('groupsChanged', updateItems);
			});
		},
		controllerAs: 'ctrl'
	};
});
