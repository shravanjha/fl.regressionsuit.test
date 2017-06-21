/**
 * Created by Shravan.Jha on 20/06/2017.
 */
var selenium = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

describe('Selenium Tutorial', function() {
    // Open the TECH.insight website in the browser before each test is run
    beforeEach(function(done) {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        setTimeout(function () {
            //console.log('inside timeout');
            done();
        }, 4000);
        this.driver = new selenium.Builder()
            .withCapabilities(selenium.Capabilities.chrome())
            .build();

        this.driver.get('http://www.techinsight.io/').then(done);
    });

    // Close the website after each test is run (so that it is opened fresh each time)
    afterEach(function(done) {
        this.driver.quit().then(done);
    });

    // Test to ensure we are on the home page by checking the <body> tag id attribute
    it('Should be on the home page', function(done) {
        //var isPresent = driver.findElements(selenium.By.tagName('body')).size() > 0;
        var element = this.driver.findElement(selenium.By.tagName('body'));
        element.getAttribute('id').then(function(id) {
            expect(id).toBe('home');
            done();
        });
    });

    // Test the navigation bar by clicking on the 'REVIEW' link and checking the URL changes to '/review'
    it('Has a working nav', function(done) {
        var element = this.driver.findElement(selenium.By.linkText('REVIEW'));

        element.click();

        this.driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('/review');
            done();
        });
    });
});
