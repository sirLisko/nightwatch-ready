'use strict';

module.exports = {

	'follow on twitter': function(browser){
		browser
			.url('http://www.nightwatchjs.org')
			.waitForElementVisible('body', 3000, 'page loaded')
			.waitForElementPresent('.twitter-share-button', 3000)
			.click('.twitter-share-button').pause(3000)

			.windowHandles(function(result) {
				browser.assert.equal(result.value.length, 2, 'there is a second window.');
				var handle = result.value[1];
				browser.switchWindow(handle);
			})

			.assert.urlContains('twitter')
			.closeWindow()
			.end();
	}

};
