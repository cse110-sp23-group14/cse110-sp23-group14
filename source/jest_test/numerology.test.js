const puppeteer = require("puppeteer");
const SERVER_PORT = 36873;

describe('Numerology page test suite', () => {
    beforeAll(async () => {
        await page.goto(`http://localhost:${SERVER_PORT}/source/`);
    }, 10000);

    /**
     * This should pass (sanity check)
     */
    it('Basic test', async () => {
        expect(20).toBe(20);
    });

    /**
     * Check that initially the message for no birthday is displayed
     */
    it('Check that no-info message is displayed', async () => {
        const text = await page.$eval("#lifepath-number", (element) => {
            return element.innerText;
        });
        expect(text).toBe('Your lifepath has not been revealed yet. Please fill out your info!');
    });

    /**
     * Check that once we fill out birthday, the correct life path number is
     * displayed
     */
    it('Check that correct number is displayed', async () => {
        // Enter birthday
        await page.$eval('#birthday', el => {
            el.value = '2002-02-04';
        });
        const bdayButton = await page.evaluateHandle(`document.querySelector("#save-birthday-form > label > input[type=submit]:nth-child(2)")`);
        await bdayButton.click();
        await page.goto(`http://localhost:${SERVER_PORT}/source/`);

        // Check life path number
        const text = await page.$eval("#lifepath-number", (element) => {
            return element.innerText;
        });
        expect(text).toBe('1');

        await bdayButton.dispose();
    });
});