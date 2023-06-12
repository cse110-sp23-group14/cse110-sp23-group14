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

    /**
     * Check that personality button opens popup that displays the correct message
     */
    it('Check that personality popup displays correct message', async () => {
        const persButton = await page.evaluateHandle(`document.querySelector("#personality-button")`);
        await persButton.click();
        await page.goto(`http://localhost:${SERVER_PORT}/source/#lifepath-popup`);

        const text = await page.$eval("#lifepath-text", (element) => {
            return element.innerText;
        });
        const expectedText = 'People in the category of number 2 are true peace lovers. Your emotional quotient is very high which is both bane and boon for you in life. You are a loyal partner, friend, and bond with people easily. Even though you are reserved by nature, the intuitive side of you makes you a people\'s person. In a situation of confusion, tiff, and misunderstanding you play an active part in resolving them for others. The convincing power is high on your side, which makes you a perfect mediator. Since you have the power to change people\'s mind, it often becomes difficult to explain yourself when there is a problem in your paradise. You own the power to self-heal from hurtful situations and also specialize in helping others do the same. People with this life path number are mostly in professions like spirituality, healing, nursing, etc.';
        expect(text).toBe(expectedText);
        await persButton.dispose();

        // Close popup to set up for next test
        const xButton = await page.evaluateHandle(`document.querySelector("#lifepath-popup > div > a")`);
        await xButton.click();
        await page.goto(`http://localhost:${SERVER_PORT}/source/#lifepath-popup-box`);
        await xButton.dispose();
    });


    /**
     * Clear user info to reset for next test suite
     */
    afterAll(async () => {
        // Set event listener to accept dialog when it pops up
        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        // Wait to accept dialog and reload home page
        await page.goto(`http://localhost:${SERVER_PORT}/source/`);

        // Click clear button
        const clearButton = await page.evaluateHandle(`document.querySelector("#settingpage > div > div > div > div.clear-profile > button")`);
        await clearButton.click();

        await clearButton.dispose();
    });
});
