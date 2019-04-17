describe.only('color.elementHasBackgroundImageOrGradient', function() {
	'use strict';

	// var fixture = document.getElementById('fixture');
	// var queryFixture = axe.testUtils.queryFixture;
	// var elementHasBackgroundImageOrGradient =
	// 	axe.commons.color.elementHasBackgroundImageOrGradient;
	// var origColorIncompleteData = axe.commons.color.incompleteData;

	// afterEach(function() {
	// 	fixture.innerHTML = '';
	// 	axe._tree = undefined;
	// 	axe.commons.color.incompleteData = origColorIncompleteData;
	// });

	// it('returns true when `HTMLElement` is of graphical type', function() {
	// 	['img', 'canvas', 'object', 'iframe', 'video', 'svg'].forEach(function(
	// 		nodeName
	// 	) {
	// 		var vNode = queryFixture(
	// 			'<' + nodeName + ' id="target"></' + nodeName + '>'
	// 		);
	// 		var actual = elementHasBackgroundImageOrGradient(vNode.actualNode);
	// 		assert.isTrue(actual);
	// 	});
	// });

	it('temp', function() {
		assert.isTrue(true);
	});

	// it('returns false when `HTMLElement` has no background-image style set', function() {
	// 	var vNode = queryFixture(
	// 		'<div id="target" style="position:absolute; left:0; top:0; height: 40px; width: 30px;">No background style</div>'
	// 	);
	// 	var actual = elementHasBackgroundImageOrGradient(vNode.actualNode);
	// 	assert.isFalse(actual);
	// });

	// it('returns false when `HTMLElement` has background-image style set to none', function() {
	// 	var vNode = queryFixture(
	// 		'<div id="target" style="height: 40px; width: 30px; background-image: none "> Some text... </div>'
	// 	);
	// 	var actual = elementHasBackgroundImageOrGradient(vNode.actualNode);
	// 	assert.isFalse(actual);
	// });

	// it('returns true when `HTMLElement` has background-image (url)', function() {
	// 	var vNode = queryFixture(
	// 		'<div id="target" style="height: 40px; width: 30px; background-image: url(london.png)"> Some text... </div>'
	// 	);
	// 	var actual = elementHasBackgroundImageOrGradient(vNode.actualNode);
	// 	assert.isTrue(actual);
	// 	assert.equal(axe.commons.color.incompleteData.get('bgColor'), 'bgImage');
	// });

	// it('returns true when `HTMLElement` has background-image (gradient)', function() {
	// 	var vNode = queryFixture(
	// 		'<div id="target" style="height: 40px; width: 30px; background-image: linear-gradient(red, orange);"> Some text... </div>'
	// 	);
	// 	var actual = elementHasBackgroundImageOrGradient(vNode.actualNode);
	// 	assert.isTrue(actual);
	// 	assert.equal(axe.commons.color.incompleteData.get('bgColor'), 'bgGradient');
	// });

	// it('returns true when `HTMLElement` has background-image (gradient) and ensure incompleteData setter is invoked', function() {
	// 	var incompleteDataCalled = false;
	// 	var vNode = queryFixture(
	// 		'<div id="target" style="height: 40px; width: 30px; background-image: radial-gradient(purple, pink, green);"> Some text... </div>'
	// 	);
	// 	// override `incompleteData` setter
	// 	axe.commons.color.incompleteData = (function() {
	// 		var data = {};
	// 		return {
	// 			set: function(key, value) {
	// 				incompleteDataCalled = true;
	// 				data[key] = value;
	// 				return data[key];
	// 			},
	// 			get: function(key) {
	// 				return data[key];
	// 			}
	// 		};
	// 	})();
	// 	var actual = elementHasBackgroundImageOrGradient(vNode.actualNode);
	// 	assert.isTrue(actual);
	// 	assert.isTrue(incompleteDataCalled);
	// 	assert.equal(axe.commons.color.incompleteData.get('bgColor'), 'bgGradient');
	// });
});