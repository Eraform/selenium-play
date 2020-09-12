const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to Url
        await driver.get('https://newsweb.oslobors.no/search?category=&issuer=&fromDate=2020-09-09&toDate=2020-09-09&market=&messageTitle=dividend');

        // Enter text "cheese" and perform keyboard action "Enter"
        // let result = await driver.findElement(By.name('table'));
        // let result = await driver.findElement(By.tagName('table'));
        // let result = await driver.findElement(By.xpath('//*[@id="root"]/div/main/table'));
        // let table = await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/main/table/tbody')));
        // let table = await driver.wait(until.elementLocated(By.xpath('//tbody')))

        let promise = await driver.wait(until.elementLocated(By.xpath('//tbody')))
        console.log(await promise.getTagName())
        console.log(promise.childElementCount)
        // console.log(await promise.getElementsByName('tr'))


        // let l1 = await table.get
        // let someElements = await table.findElements(By.xpath('tr'))


        // https://smartproxy.com/what-is-web-scraping/selenium-scraping-with-node-js
        // driver.findElements(By.id('employee-name').then(function(elements){
        //     for (var i = 0; i < elements.length; i++){
        //         elements[i].getText().then(function(text){
        //             console.log(text)
        //         });
        //     };
        // });

        // table.findElement(By.xpath('.//tr'))
        // let result = await driver.findElement(By.xpath('/html/body/div/div/main/table'));


        // let firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 10000);

        // console.log(await firstResult.getAttribute('textContent'));

        // console.log("Table: ", table)
        // console.log("I am done")
    }
    finally{
        driver.quit();
    }
})();
