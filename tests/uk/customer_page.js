/**
 * Created by adri7917 on 10/21/15.
 */
/*
 As a user
 When I visit *.rackspace.co.uk/customers
 Then the page should load
 And a filter list of customers should be present
 */
var url = 'http://stage.rackspace.co.uk/customers'
module.exports = {
    'When I visit *.rackspace.co.uk/customers' : function (browser) {
        browser
            .url(url)
            .waitForElementVisible('body', 2000)

    },
    'Then the page should load' : function (client) {
        client
            .assert.urlContains('customers')
    },
    'And a filter list of customers should be present' : function (client) {
        client
            .assert.elementPresent('#edit-customer-solution-wrapper')
            .end()
    }
};
