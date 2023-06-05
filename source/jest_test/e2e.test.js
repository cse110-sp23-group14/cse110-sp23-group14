const puppeteer = require("puppeteer");
const SERVER_PORT = 36873;

describe('Basic user flow for Website', () => {
    beforeAll(async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:36873/source/');
    });

    it('Basic test', async () => {
        expect(20).toBe(20);
    });
});