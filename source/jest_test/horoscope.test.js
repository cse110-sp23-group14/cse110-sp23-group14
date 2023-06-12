/**
 * Notes:
 * - Our functions and our webpage (localStorage, DOM, etc.) are strongly coupled, and so for our "unit tests",
 * - we need to use puppeteer to tests parts of our code.
 *  */

const puppeteer = require("puppeteer");
const SERVER_PORT = 36873;

import { horoscopeJSON } from "../jsons/horoscopeJson.js";

test('Sample sanity check test', () =>{
    expect(4).toBe(4);
});

describe('Horoscope page test suite', () => {
    // Go to the page
    beforeAll(async () => {
        await page.goto(`http://localhost:${SERVER_PORT}/source/`);
    }, 20000);

    /**
     * First check that localStorage is empty, then add name and birthday and check that
     * they are correct in localStorage. (Combined tests from settings.test.js)
     */
    it('Check that localStorage starts empty then adds user\'s info', async () => {
        // Check that name and birthday are null
        const storedName = await page.evaluate(() => {
            return localStorage.getItem('name');
        });
        expect(storedName).toBe(null);

        const storedBirthday = await page.evaluate(() => {
            return localStorage.getItem('birthday');
        });
        expect(storedBirthday).toBe(null);

        const storedYear = await page.evaluate(() => {
            return localStorage.getItem('birthdayYear');
        });
        expect(storedYear).toBe(null);

        // Add name and birthday
        // Enter a name
        await page.$eval('#name', el => {
            el.value = 'Sample Name';
        });
        const nameButton = await page.evaluateHandle(`document.querySelector("#save-name-form > label > input[type=submit]:nth-child(2)")`);
        await nameButton.click();

        await page.goto(`http://localhost:${SERVER_PORT}/source/`);

        const newName = await page.evaluate(() => {
            return localStorage.getItem('name');
        });
        expect(newName).toBe('Sample Name');

        await nameButton.dispose();

        // Enter a birthday
        await page.$eval('#birthday', el => {
            el.value = '2004-09-23';
        });
        const bdayButton = await page.evaluateHandle(`document.querySelector("#save-birthday-form > label > input[type=submit]:nth-child(2)")`);
        await bdayButton.click();

        await page.goto(`http://localhost:${SERVER_PORT}/source/`);

        const newBirthday = await page.evaluate(() => {
            return localStorage.getItem('birthday');
        });
        expect(newBirthday).toBe('9.23');

        const newYear = await page.evaluate(() => {
            return localStorage.getItem('birthdayYear');
        });
        expect(newYear).toBe('2004.9.23');

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
        horoscopeBtn.dispose();
    });

    /**
     * Check that popup contains the correct date (today's date)
     */
    it('Check current date in popup', async () => {
        const date = await page.$eval("#horoscope-popup > div > p.daily-date", (element) => {
            return element.innerHTML;
        });
        const currentDate = await page.evaluate(() => {
            return new Date().toLocaleDateString();
        });

        expect(date).toBe(currentDate);
    });

    /**
     * Check that popup contains the correct sign for the birthday previously entered
     */
    it('Check user\'s sign in popup', async () => {
        const sign = await page.$eval("#horoscope-popup > div > h1", (element) => {
            return element.innerHTML;
        });
        expect(sign).toBe('Libra');
    });

    /**
     * Check that popup contains the correct horoscope for user's sign and today's date
     */
      
    it('Check horoscope text in popup', async () => {

        // Get the text of the horoscope in the popup
        const text = await page.evaluate(async() => {
        const horoscopeButton = document.getElementById("horoscope-button");
        horoscopeButton.click();
        await new Promise(r => setTimeout(r, 4000));
        const dailyContent = document.querySelector("#horoscope-popup > div > p.daily-content");
        return dailyContent.textContent;
        });

        // Find expected message
        const horoscopeTable = JSON.parse(JSON.stringify(horoscopeJSON))['Libra'];
        const index = await page.evaluate(() => {
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth();
            const stringInputToHash = "" + day + month;
            const inputToHash = Number(stringInputToHash);
            const hashValue = inputToHash % 13;
            return hashValue;
        });
        const message = horoscopeTable[index];

        expect(text).toBe(message);
    });

    /**
     * Test that share button is clickable
     */
    it('Check share button', async () => {
        // Click the share button
        const shareBtn = await page.evaluateHandle(`document.querySelector("#horoscope-popup > div > button")`);
        await shareBtn.click();

        const text = await page.$eval("#horoscope-popup > div > p.share-confirm", (element) => {
            return element.innerHTML;
        });

        expect(text).toBe('Copied!');
        await shareBtn.dispose();
    }, 10000);

    /**
     * Click the x button and check that we redirect to the correct url
     */
    it('Check that horoscope popup disappears when x button clicked', async () => {
        const xBtn = await page.evaluateHandle(`document.querySelector("#horoscope-popup > div > a")`);
        await page.goto(`http://localhost:${SERVER_PORT}/source/#horoscope_popup-box`);
        await xBtn.click();

        expect(page.url()).toBe(`http://localhost:${SERVER_PORT}/source/#horoscope_popup-box`);
        xBtn.dispose();
    });
});



