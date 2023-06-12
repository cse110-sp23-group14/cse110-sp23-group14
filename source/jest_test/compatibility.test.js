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
});