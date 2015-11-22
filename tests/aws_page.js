/**
 * Created by adri7917 on 10/9/15.
 */

module.exports = {
    'Visit managed aws page and click cart link' : function (browser) {
        browser
            .url('http://rackspace.com/en-au/managed-aws?foo=bar')
            .waitForElementVisible('body', 2000)
            .pause('2000')
            .moveTo('@awsCartLink')
            .click('a[href$="/aws"]')
    },
    'verify cart page' : function (client) {
        client
            .assert.urlContains('en-au')
            .end()
    }
};
