const puppeteer = require("puppeteer");
const SERVER_PORT = 36873;

/**
 * How to run tests: run the command below
 * npm run serve-port & npm test & sleep 20;kill $(ps aux | grep "npm run serve-port" | awk 'NR==1 {print $2}')
 */
describe('Basic user flow for Website', () => {
    beforeAll(async () => {
        // const browser = await puppeteer.launch();
        // const page = await browser.newPage();
        await page.goto(`http://localhost:${SERVER_PORT}/source/`);
    });

    it('Basic test', async () => {
        expect(20).toBe(20);
    });

    // Check to make sure that name and birthday are not in local storage (when we first start)
    it('Checking localStorage to make sure name and birthday are empty', async () => {
        const storedName = await page.evaluate(() => {localStorage.getItem("name")});
        expect(storedName).toBe(undefined);

        const storedBirthday = await page.evaluate(() => {localStorage.getItem("birthday")});
        expect(storedBirthday).toBe(undefined);
    });

    // Check to make sure we can set name in localStorage using form in settings page
    it('Check that we can edit name in localStorage', async () => {
        // Enter a name
        await page.type('input[name=name]', 'Sample Name', {delay: 200});
        const nameButton = await page.evaluateHandle(`document.querySelector("#save-name-form > div > input[type=submit]:nth-child(3)")`);
        await nameButton.click({
            waitUntil: "domcontentloaded",
        });

        const storedName = await page.evaluate(() => localStorage.getItem("name"));
        expect(storedName).toBe('Sample Name');
    });
});