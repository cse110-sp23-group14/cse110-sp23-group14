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

        // We don't really need this but keep it in case page takes a while to load
        await page.goto(`http://localhost:${SERVER_PORT}/source/`);

        const text = await page.evaluateHandle(`document.querySelector("#home-link > h1").innerHTML`);
        expect(text).toBe('Home');
    });
});