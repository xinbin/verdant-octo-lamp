/**
 * Created by adri7917 on 10/14/15.
 */
module.exports = {
    'Demo test for Rackspace chat' : function (browser) {
        browser
            .url('http://www.rackspace.com')
            .waitForElementVisible('body', 5000)
            .moveToElement('div.grid_3.push_4', 10, 10)
            .click('div.chat:nth-child(1) > a:nth-child(1)')
            .pause('3000')
            .window_handles(function(result) {
                var windowKey = 1
                var handle = result.value[windowKey]
                browser.switchWindow(handle)
                    browser.assert.urlContains('LAChatWindowLiveSalesAssistUS')
                    //browser.closeWindow();
                //browser.closeWindow();
            })
            .assert.urlContains('rackspace')
            .end();
    }
};
