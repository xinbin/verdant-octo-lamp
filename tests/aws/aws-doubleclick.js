/**
 * Created by adri7917 on 11/9/15.
 */
/**
 *  Given a rackspace sign-up
     When a user completes an AWS sign-up
     And the user is on the confirmation page
     Then an iframe for Doubleclick should be added to the page
     And the iframe src URL should have the appropriate values

 */
var url = 'https://cart.rackspace.com/aws'

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

