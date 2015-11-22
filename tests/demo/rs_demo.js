/**
 * Created by adri7917 on 10/6/15.
 */

module.exports = {
    'Demo test for Rackspace' : function (browser) {
        browser
            .url('http://www.rackspace.com')
            .waitForElementVisible('#___gcse_1', 2000)
            .click('input.gsc-input')
            .setValue('#gsc-i-id2', ['cloud', browser.Keys.ENTER])
            .pause('1000')
            .assert.containsText('h1.search', 'cloud')
            .end();
    }
};

