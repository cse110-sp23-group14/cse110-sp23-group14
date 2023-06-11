
/* Old stuff Here
/**
 * Notes:
 * - Our functions and our webpage (localStorage, DOM, etc.) are strongly coupled, and so for our "unit tests",
 * - we need to use puppeteer to tests parts of our code.
 *  */

const puppeteer = require("puppeteer");
const SERVER_PORT = 36873;

test('Sample sanity check test', () =>{
    expect(4).toBe(4);
});

describe('Horoscope page test suite', () => {
    // Go to the page
    beforeAll(async () => {
        await page.goto(`http://localhost:${SERVER_PORT}/source/`);
    }, 10000);

    /**
     * First check that localStorage is empty, then add name and birthday and check that
     * they are correct in localStorage. (Combined tests from settings.test.js)
     */
    it('Check that localStorage starts empty then adds user\'s info', async () => {
        // Check that name and birthday are null
        const storedName = await page.evaluate(() => localStorage.getItem('name'));
        expect(storedName).toBe(null);

        const storedBirthday = await page.evaluate(() => localStorage.getItem('birthday'));
        expect(storedBirthday).toBe(null);

        const storedYear = await page.evaluate(() => localStorage.getItem('birthdayYear'));
        expect(storedYear).toBe(null);

        // Add name and birthday
        // Enter a name
        await page.$eval('#name', el => {
            el.value = 'Sample Name';
        });
        const nameButton = await page.evaluateHandle(`document.querySelector("#save-name-form > div > input[type=submit]:nth-child(3)")`);
        await nameButton.click();

        await page.goto(`http://localhost:${SERVER_PORT}/source/`);

        const newName = await page.evaluate(() => localStorage.getItem('name'));
        expect(newName).toBe('Sample Name');

        await nameButton.dispose();

        // Enter a birthday
        await page.$eval('#birthday', el => {
            el.value = '1999-05-18';
        });
        const bdayButton = await page.evaluateHandle(`document.querySelector("#save-birthday-form > input[type=submit]:nth-child(3)")`);
        await bdayButton.click();

        await page.goto(`http://localhost:${SERVER_PORT}/source/`);

        const newBirthday = await page.evaluate(() => localStorage.getItem('birthday'));
        expect(newBirthday).toBe('5.18');

        const newYear = await page.evaluate(() => localStorage.getItem('birthdayYear'));
        expect(newYear).toBe('1999.5.18');

        await bdayButton.dispose();
    }, 15000);

    /**
     * Click the horoscope button and check that we redirect to the correct url
     */
    it('Check that horoscope popup appears when button clicked', async () => {
        const horoscopeBtn = await page.evaluateHandle(`document.querySelector("#horoscope-button")`);
        await page.goto(`http://localhost:${SERVER_PORT}/source/#horoscope-popup`);
        await horoscopeBtn.click();

        expect(page.url()).toBe(`http://localhost:${SERVER_PORT}/source/#horoscope-popup`);
    });

    /**
     * Check that popup contains the correct date (today's date)
     */
    it('Check current date in popup', async () => {
        const date = await page.$eval("#horoscope-popup > div > p.daily-date", (element) => {
            return element.innerHTML;
        });
        const currentDate = await page.evaluate(() => new Date().toLocaleDateString());

        expect(date).toBe(currentDate);
    });

    /**
     * Check that popup contains the correct sign for the birthday previously entered
     */
    it('Check current date in popup', async () => {
        const date = await page.$eval("#horoscope-popup > div > p.daily-date", (element) => {
            return element.innerHTML;
        });
        const currentDate = await page.evaluate(() => new Date().toLocaleDateString());

        expect(date).toBe(currentDate);
    });

    // TODO: Copy whatever else is appropriate from settings.test.js
    // Beyond copying, we want to test if the correct horoscopes are being returned for a given Date input.
});



