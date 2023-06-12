const puppeteer = require("puppeteer");
const SERVER_PORT = 36873;

describe('Compatibility page test suite', () => {
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
     * Check that initially the compatibility button is disabled
     */
    it('Check that compatibility button is disabled', async () => {
        const isDisabled = await page.$eval('#check-compatibility-button', (button) => {
            return button.disabled;
        });
        expect(isDisabled).toBe(true);
    });

    /**
     * Check that when you click two zodiacs, the correct images and text appear
     */
    it('Check that page responds to selecting two zodiacs', async () => {
        // Click Sagittarius and Scorpio
        const sagBtn = await page.evaluateHandle(`document.querySelector("#sagittarius")`);
        await sagBtn.click();

        const scorpBtn = await page.evaluateHandle(`document.querySelector("#scorpio")`);
        await scorpBtn.click();

        // Check that correct text and images pop up in header
        const sagText = await page.$eval("#header > div > div.shape-left > span", (element) => {
            return element.innerHTML;
        });
        expect(sagText).toBe('Sagittarius');

        const sagImg = await page.$eval('#header > div > div.shape-left', async (div) => {
            return div.style.backgroundImage;
        });
        expect(sagImg).toBe('url("assets/zodiac_sign/sagittarius.png")');

        const scorpText = await page.$eval("#header > div > div.shape-right > span", (element) => {
            return element.innerHTML;
        });
        expect(scorpText).toBe('Scorpio');

        const scorpImg = await page.$eval('#header > div > div.shape-right', async (div) => {
            return div.style.backgroundImage;
        });
        expect(scorpImg).toBe('url("assets/zodiac_sign/scorpio.png")');

        await sagBtn.dispose();
        await scorpBtn.dispose();
    });

    /**
     * Check that scorpio+sagittarius gives the correct message and popup title when we 
     * click the compatibility button
     */
    it('Check that Scorpio&Sagittarius popup text is correct', async () => {
        const compBtn = await page.evaluateHandle(`document.querySelector("#check-compatibility-button")`);
        await compBtn.click();

        const title = await page.$eval('#compatibility-popup-new > div > h1', (div) => {
            return div.innerText;
        });
        expect(title).toBe('Sagittarius + Scorpio');

        const message = await page.$eval('#compatibility-popup-new > div > p', (div) => {
            return div.innerText;
        });
        expect(message).toBe('30° (Semi-Sextile): Signs that are semi-sextile have a subtle and supportive compatibility. While you may have different elemental natures, you still share some similarities that enable you to understand and appreciate each other. Your relationship is characterized by a sense of cooperation, where you can support each other\'s growth and offer different perspectives. With open communication and mutual respect, you can create a stable and nurturing connection.');

        await compBtn.dispose();
    });

    /**
     * Check that we can close popup and clear the selected signs
     */
    it('Check that we can close popup and clear the selected signs', async () => {
        // Close popup and clear selected signs
        const xBtn = await page.evaluateHandle(`document.querySelector("#close-compatibility-popup-new")`);
        await xBtn.click();

        const leftBtn = await page.evaluateHandle(`document.querySelector("#header > div > div.shape-left")`);
        await leftBtn.click();

        const rightBtn = await page.evaluateHandle(`document.querySelector("#header > div > div.shape-right")`);
        await rightBtn.click();

        // Make sure that header text and images are empty now
        const leftText = await page.$eval("#header > div > div.shape-left > span", (element) => {
            return element.innerHTML;
        });
        expect(leftText).toBe('');

        const leftImg = await page.$eval('#header > div > div.shape-left', async (div) => {
            return div.style.backgroundImage;
        });
        expect(leftImg).toBe('');

        const rightText = await page.$eval("#header > div > div.shape-right > span", (element) => {
            return element.innerHTML;
        });
        expect(rightText).toBe('');

        const rightImg = await page.$eval('#header > div > div.shape-right', async (div) => {
            return div.style.backgroundImage;
        });
        expect(rightImg).toBe('');

        await xBtn.dispose();
        await leftBtn.dispose();
        await rightBtn.dispose();
    });
});