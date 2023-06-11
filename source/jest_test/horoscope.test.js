
/* Old stuff Here

// import {generateHoroscope} from '../scripts/horoscope.js';  //reqeust the function we are going to test from our javascript file

// const user=1;
// test('properly adds two numbers', ()=>{
//   expect(generateHoroscope(user)).toBe("I love astrology!")
// });


// test('find correct Aries horoscope', () => {
//   expect(t.generateHoroscope.toBe("A stroke of misfortune may cast a shadow over your day, Aries. Unexpected setbacks and challenges might dampen your spirits. Stay resilient, draw on your inner strength, and focus on self-care to navigate through this temporary phase."))
// });

*/

/**
 * Notes:
 * - Our functions and our webpage (localStorage, DOM, etc.) are strongly coupled, and so for our "unit tests",
 * - we need to use puppeteer to tests parts of our code
 *  */


const puppeteer = require("puppeteer");
const SERVER_PORT = 36873; // Use this when actually running tests in CI/CD pipeline
// const SERVER_PORT = 5500; // Use this when just running tests locally

test('sample test so tests run before we refactor this file', () =>{
    expect(4).toBe(4);
});

describe('Horoscope page test suite', () => {
    // Making sure to go to the page
    beforeAll(async () => {
        await page.goto(`http://localhost:${SERVER_PORT}/source/`);
    });

    it('Checking that localStorage has no name or birthday', async () => {
        const storedName = await page.evaluate( () => localStorage.getItem('name'));
        expect(storedName).toBe(null);

        // TODO: Finish this part, basically just ripped off of settings.test.js

    });

    // TODO: Copy whatever else is appropriate from settings.test.js
    // Beyond copying, we want to test if the correct horoscopes are being returned for a given Date input.
});



