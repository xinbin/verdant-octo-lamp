/**
 * Created by adri7917 on 11/2/15.
 */


// we want to only grab 4 links
for(x=0; x < 4; x++){
    // grab all link in footer
    var links =  document.querySelectorAll('.footer a')
    // grab a random link , set key for that link
    var link_key = parseInt(links.length* Math.random())
    // get href attribute
    var target_page = links[link_key].getAttribute('href')
    // get target attibute
    var new_page = links[link_key].getAttribute('target')

    links[link_key].click()

    // CHECKS NEW WINDOW
    if(new_page == "_target"){
        // put code that handles a new window
        // code that targets new window
        // switch to new window
        // check new windows url
    }
    // CHECKS CURRENT WINDOW ONLY
    else {
        // put code that handle current page changing
        browser.assert.urlContains(new_page)
            // go back to home page
            .visit('rackspace.com')
    }


}