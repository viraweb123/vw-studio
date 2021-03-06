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
 * @ngdoc Widgets
 * @name collection
 * @description Collection controller
 * 
 * A widget collection controller
 * 
 */
angular.module('vwStudio').factory('StudioSeenCollectionWidget', function(
		/* am-wb-core */ AmWbSeenCollectionWidget, $widget) {



	//-------------------------------------------------------------
	// Widget
	//-------------------------------------------------------------
	function StodioWidget($scope, $element, $parent) {
		AmWbSeenCollectionWidget.apply(this, [$scope, $element, $parent]);
	}
	StodioWidget.prototype = Object.create(AmWbSeenCollectionWidget.prototype);

	StodioWidget.prototype.isLeaf = function() {
		var wd = $widget.getWidget(this.getType());
		return wd.isLeaf;
	};

	/**
	 * List of allowed child
	 * 
	 * @memeberof WbWidgetGroupCtrl
	 */
	StodioWidget.prototype.getAllowedTypes = function() {
		return this.allowedTypes;
	};

	/**
	 * set acceptable widgets
	 * 
	 * $widget.setAcceptableChild('a', 'b');
	 * 
	 * @memberof WbWidgetGroupCtrl
	 */
	StodioWidget.prototype.setAllowedTypes = function() {
		this.allowedTypes = arguments;
	};

	StodioWidget.prototype.isHorizontal = function() {
		var direction = this.getModelProperty('style.flexDirection') || this.getProperty('style.flexDirection');
		return direction === 'row';
	};
	
	
	StodioWidget.prototype.isLocked = function() {
		return this.locked;
	};
	
	StodioWidget.prototype.setLock = function(flag) {
		this.locked = flag;
	};
	
	StodioWidget.prototype.isTemplateLoadedAsContnet = function() {
		return this.templateLoadedAsContnet;
	};
	StodioWidget.prototype.setTemplateLoadedAsContnet = function(flag) {
		this.templateLoadedAsContnet = flag;
	};

	return StodioWidget;
});