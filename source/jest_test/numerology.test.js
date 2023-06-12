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

        const text = await page.$eval("#lifepath-text", (element) => {
            return element.innerText;
        });
        const expectedText = 'As natural-born leaders, you are not only courageous but also high spirited. You love your freedom, so it is ensured that its reins are intact in your hands. You are well- suited for self-employment and would excel as a self-boss. Your goal-oriented nature has taken you a long way in your life, if not yet then it is likely to show its effect in the coming time. The pure dedication and focus with which you take up any task or errand give you success most of the time. You put your heart and soul into achieving your target or task. You can be a multi-tasker if the work interests you and you have the zeal to do it. You are mostly clear about the path of achievement but you also demand attention and love from people around. Often you get agitated when things do not go your way. The swollen ego, boastful nature and arrogance at times drive you insane and you hamper things around.';
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
