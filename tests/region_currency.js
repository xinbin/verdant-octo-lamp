/**
 * Created by adri7917 on 11/5/15.
 */
/*
 Given a rackspace.com visit
 When a user is on an APAC locale
 Then the default currency should be USD
 And the default pricing region should be APAC
 */
var url = 'http://staging.rackspace.com/'
var pageArray = [
    '/cloud/servers',
    '/cloud/public-pricing',
    '/cloud'
]
var localeArray = [
    '/en-hk',
    '/en-sg',
    '/en-in',
    '/en-ph'
]
var page = pageArray[Math.floor(Math.random() * pageArray.length)];
var randLocale = localeArray[Math.floor(Math.random() * localeArray.length)];
module.exports = {
    'Given a rackspace.com visit' : function (browser) {
        browser
            .url(url + randLocale + page)
            .waitForElementVisible('body', 2000)

    },
    'When a user is on an APAC locale' : function (client) {
        client
            .assert.urlContains(randLocale)
    },
    'Then the default currency should be USD' : function (client) {
        client
            .moveTo('@currencyChoice')
            .getAttribute('select#currency_selector option[value="USD"]', 'selected', function(result) {
                this.assert.equal(typeof result, "object");
                this.assert.equal(result.status, 0);
                this.assert.equal(result.value, "true");
            } )
    },
    'And the default pricing region should be APAC' : function (client) {
        client
            .moveTo('span[data-currency="USD"]')
            .assert.visible('span[data-currency="USD"]')
            .end()
    },
};