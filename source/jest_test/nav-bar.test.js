const puppeteer = require("puppeteer");
const SERVER_PORT = 36873;


/**
 * E2E test suite to test the nav bar
 */
describe('Nav bar test suite', () => {
    beforeAll(async () => {
        await page.goto(`http://localhost:${SERVER_PORT}/source/`);
    });

    /**
     * Check that the nav bar opens when we click the hamburger icon
     */
    it('Check that nav bar opens', async () => {
        const buttonHandle = await page.evaluateHandle(`document.querySelector("#nav-button > i.fa-solid.fa-bars.fa-2xl")`);
        await buttonHandle.click();
        
        // Wait for nav bar animation
        await page.waitForTimeout(100);

        // Check that hamburger icon is hidden and x icon is shown
        const images = await page.$eval("#nav-button", (element) => {
            return element.innerHTML
        });
        console.log(images);
        expect(images).toBe('<i class=\"fa-solid fa-bars fa-2xl icon-hide\"></i><i class=\"fa-solid fa-xmark fa-2xl\"></i>');
    });

    /**
     * This should pass (sanity check)
     */
    it('Basic test', async () => {
        expect(20).toBe(20);
    });
});