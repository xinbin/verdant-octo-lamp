/**
 * Created by adri7917 on 10/8/15.
 */

module.exports = {
    'Check currency display' : function (browser) {
        browser
            .url('http://rackspace.com/cloud/public-pricing')
            .waitForElementVisible('body', 2000)
            .moveTo('@currencyChoice')
    },
    'Choose AUD' : function (client) {
        client
            .click('select#currency_selector option[value="AUD"]')
            .pause('1000')
            .assert.visible('p.pricing-dis.pricing-dis-inf span[data-currency="AUD"]')
    },
    'Choose USD' : function (client) {
        client
            .click('select#currency_selector option[value="USD"]')
            .pause('1000')
            .assert.visible('p.pricing-dis.pricing-dis-inf span[data-currency="USD"]')
            .assert.hidden('p.pricing-dis.pricing-dis-inf span[data-currency="EUR"]')
    },
    'Choose EUR' : function (client) {
        client
            .click('select#currency_selector option[value="EUR"]')
            .pause('1000')
            .assert.visible('p.pricing-dis.pricing-dis-inf span[data-currency="EUR"]')
    },
    'Choose GBP' : function (client) {
        client
            .click('select#currency_selector option[value="GBP"]')
            .pause('1000')
            .assert.visible('p.pricing-dis.pricing-dis-inf span[data-currency="GBP"]')
            .assert.hidden('p.pricing-dis.pricing-dis-inf span[data-currency="EUR"]')
            .end()
    }
};
