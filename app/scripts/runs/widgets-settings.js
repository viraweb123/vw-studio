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
 * Load widgets
 */
angular.module('vwStudio').run(function($settings) {
	/************************************************************************
	 * Model and Widgets
	 ************************************************************************/
	$settings.addPage({
		type: 'general',
		label: 'Model',
		icon: 'opacity',
		templateUrl: 'views/settings/wb-widget-general.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingGeneralCtrl',
	});
	$settings.addPage({
		type: 'a',
		label: 'Link',
		description: 'Manage link in the current widget.',
		icon: 'settings',
		templateUrl: 'views/settings/wb-widget-a.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingACtrl',
		targets: ['^a$']
	});
	$settings.addPage({
		type: 'img',
		label: 'Image',
		description: 'Manage image widget settings.',
		icon: 'insert_photo',
		templateUrl: 'views/settings/wb-widget-img.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingWidgetImgCtrl',
		targets: ['img']
	});
	$settings.addPage({
		type: 'input',
		label: 'Input',
		description: 'Manage input widget settings.',
		icon: 'input',
		templateUrl: 'views/settings/wb-widget-input.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingWidgetInputCtrl',
		targets: ['input']
	});
	$settings.addPage({
		type: 'microdata',
		label: 'Microdata',
		description: 'Manage widget microdata.',
		icon: 'label_important',
		templateUrl: 'views/settings/wb-widget-microdata.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingWidgetMicrodataCtrl'
	});
	$settings.addPage({
		type: 'meta',
		label: 'Meta',
		icon: 'label_important',
		templateUrl: 'views/settings/wb-widget-meta.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingWidgetMetaCtrl'
	});
	$settings.addPage({
		type: 'iframe',
		label: 'Frame',
		description: 'Manges IFrame attributes',
		icon: 'filter_frames',
		templateUrl: 'views/settings/wb-widget-iframe.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingWidgetIFrameCtrl',
		targets: ['iframe']
	});
	$settings.addPage({
		type: 'form',
		label: 'Form',
		description: 'Manges form attributes',
		icon: 'filter_frames',
		templateUrl: 'views/settings/wb-widget-form.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingWidgetFormCtrl',
		targets: ['form']
	});
	$settings.addPage({
		type: 'source',
		label: 'Source',
		templateUrl: 'views/settings/wb-widget-source.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingWidgetSourceCtrl',
		targets: ['source']
	});
	$settings.addPage({
		type: 'picture',
		label: 'Picture',
		templateUrl: 'views/settings/wb-widget-picture.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingWidgetPictureCtrl',
		targets: ['picture']
	});
	$settings.addPage({
		type: 'video',
		label: 'Video',
		templateUrl: 'views/settings/wb-widget-video.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingWidgetVideoCtrl',
		targets: ['video']
	});
	$settings.addPage({
		type: 'audio',
		label: 'Audio',
		templateUrl: 'views/settings/wb-widget-audio.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingWidgetAudioCtrl',
		targets: ['audio']
	});

	$settings.addPage({
		type: 'import',
		label: 'Import',
		description: 'Set down collection properties',
		icon: 'settings',
		templateUrl: 'views/settings/wb-widget-import.html',
		controllerAs: 'ctrl',
		controller: 'WbSeenImportSettingCtrl',
		targets: ['import']
	});

	$settings.addPage({
		type: 'ObjectCollection',
		label: 'Collection',
		description: 'Set down collection properties',
		icon: 'settings',
		templateUrl: 'views/settings/wb-widget-collection.html',
		controllerAs: 'ctrl',
		controller: 'WbSeenCollectionSettingCtrl',
		targets: ['ObjectCollection']
	});


	/************************************************************************
	 * Style
	 ************************************************************************/
	$settings.addPage({
		type: 'style.animation',
		label: 'Animation',
		icon: 'opacity',
		templateUrl: 'views/settings/wb-style-animation.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingStyleAnimationCtrl',
	});
	$settings.addPage({
		type: 'style.background',
		label: 'Background',
		icon: 'opacity',
		templateUrl: 'views/settings/wb-style-background.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingStyleBackgroundCtrl',
	});
	$settings.addPage({
		type: 'style.border',
		label: 'Border',
		icon: 'opacity',
		templateUrl: 'views/settings/wb-style-border.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingStyleBorderCtrl',
	});
	$settings.addPage({
		type: 'style.general',
		label: 'General',
		icon: 'opacity',
		templateUrl: 'views/settings/wb-style-general.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingStyleGeneralCtrl',
	});
	$settings.addPage({
		type: 'style.layout',
		label: 'Layout',
		icon: 'opacity',
		templateUrl: 'views/settings/wb-style-layout.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingStyleLayoutCtrl',
	});
	$settings.addPage({
		type: 'style.media',
		label: 'Medai',
		icon: 'opacity',
		templateUrl: 'views/settings/wb-style-media.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingStyleMediaCtrl',
	});
	$settings.addPage({
		type: 'style.size',
		label: 'Size',
		icon: 'opacity',
		templateUrl: 'views/settings/wb-style-size.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingStyleSizeCtrl',
	});
	$settings.addPage({
		type: 'style.text',
		label: 'Text',
		icon: 'opacity',
		templateUrl: 'views/settings/wb-style-text.html',
		controllerAs: 'ctrl',
		controller: 'WbSettingStyleTextCtrl',
	});
});
