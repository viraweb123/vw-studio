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

//Test controller
angular.module('vwStudio').controller('AmhContentPagesCtrl', function(
	$scope, $controller, $cms, $actions) {

	// Extends Items controller
	angular.extend(this, $controller('MbSeenCmsContentsCtrl', {
		$scope: $scope
	}));

	// get accounts
	this.getModels = function(queryParams) {
		queryParams.setFilter('media_type', 'page');
		return $cms.getContents(queryParams)
			.then(function(list) {
				for (var i = 0; i < list.items.length; i++) {
					var item = list.items[i];
					var map = {};
					var metas = item.metas || [];
					for (var j = 0; j < metas.length; j++) {
						var key = metas[j].key.replace('.', '_');
						map[key] = metas[j].value;
					}
					item.metasMap = map;
				}
				return list;
			});
	};

	function findMeta(page, key) {
		if (_.isUndefined(page.metas)) {
			return;
		}
		for (var i = 0; i < page.metas.length; i++) {
			if (page.metas[i].key === key) {
				return page.metas[i];
			}
		}
	}

	this.getPageCover = function(page) {
		var meta = findMeta(page, 'link.cover');
		if (meta) {
			return meta.value;
		}
		return 'no-image';
	};

	this.openEditor = function(page, $event) {
		$event.pages = [page];
		return $actions.exec('studio.cms.contents.edit', $event);
	};

	this.openPreveiw = function(page, $event) {
		$event.pages = [page];
		return $actions.exec('studio.cms.contents.preview', $event);
	};

	this.title = 'Pages';
	this.init({
		eventType: '/cms/contents',
		actions: [{
			title: 'New',
			icon: 'add_box',
			id: 'create',
			alias: true,
			actionId: 'studio.cms.contents.new'
		}]
	});
});
