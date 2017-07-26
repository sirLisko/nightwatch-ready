module.exports = {

  'follow on twitter': browser => browser
    .url('http://www.nightwatchjs.org')
    .waitForElementVisible('body', 'page loaded')
    .waitForElementPresent('.twitter-share-button')
    .click('.twitter-share-button').pause(3000)

    .windowHandles(result => {
      browser.assert.equal(result.value.length, 2, 'there is a second window.')
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    .assert.urlContains('twitter')
    .closeWindow()
    .end()

}
