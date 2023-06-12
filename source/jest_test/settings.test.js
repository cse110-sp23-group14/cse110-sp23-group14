const puppeteer = require("puppeteer");
const SERVER_PORT = 36873;


/**
 * How to run tests: run the command below
 * npm run serve-port & npm test
 * Be sure to kill the port before running again
 * You can see if serve still running with ps aux | grep "npm run serve-port"
 * If there are >1 items then the port still open and you have to kill the PID of the first one
 */


/**
 * E2E test suite to test storing user's information to local storage
 * Testing basic functionality for settings page
 */
describe('Settings page test suite', () => {
    beforeAll(async () => {
        await page.goto(`http://localhost:${SERVER_PORT}/source/`);
    }, 20000);

    /**
     * This should pass (sanity check)
     */
    it('Basic test', async () => {
        expect(20).toBe(20);
    });

    /**
     * Check to make sure we can set and get local storage with a random token
     */
    it('Check that we can edit/access localStorage', async () => {
        await page.evaluate(() => {
            localStorage.setItem('test', 'testObj');
        });

        // We don't really need this but keep it in case page takes a while to load
        await page.goto(`http://localhost:${SERVER_PORT}/source/`);

        const storedName = await page.evaluate(() => {
            return localStorage.getItem('test');
        });
        expect(storedName).toBe('testObj');
    });

    /**
     * Check to make sure that name and birthday are not in local storage (when we first start)
     */
    it('Checking localStorage to make sure name and birthday are empty', async () => {
        const storedName = await page.evaluate(() => {
            return localStorage.getItem('name');
        });
        expect(storedName).toBe(null);

        const storedBirthday = await page.evaluate(() => {
            return localStorage.getItem('birthday');
        });
        expect(storedBirthday).toBe(null);

        const storedYear = await page.evaluate(() => {
            return localStorage.getItem('birthdayYear');
        });
        expect(storedYear).toBe(null);
    });

    /**
     * Check to make sure we can set name in localStorage using form in settings page
     */
    it('Check that we can edit name in localStorage', async () => {
        // Enter a name
        await page.$eval('#name', el => {
            el.value = 'Sample Name';
        });
        const nameButton = await page.evaluateHandle(`document.querySelector("#save-name-form > div > input[type=submit]:nth-child(3)")`);
        await nameButton.click();

        await page.goto(`http://localhost:${SERVER_PORT}/source/`);

        const storedName = await page.evaluate(() => {
            return localStorage.getItem('name');
        });
        expect(storedName).toBe('Sample Name');

        await nameButton.dispose();
    }, 10000);

    /**
     * Check to make sure we can set birthday in localStorage using form in settings page
     */
    it('Check that we can edit birthday in localStorage', async () => {
        // Enter a birthday
        await page.$eval('#birthday', el => {
            el.value = '1999-05-18';
        });
        const bdayButton = await page.evaluateHandle(`document.querySelector("#save-birthday-form > input[type=submit]:nth-child(3)")`);
        await bdayButton.click();

        await page.goto(`http://localhost:${SERVER_PORT}/source/`);

        const storedBirthday = await page.evaluate(() => {
            return localStorage.getItem('birthday');
        });
        expect(storedBirthday).toBe('5.18');

        const storedYear = await page.evaluate(() => {
            return localStorage.getItem('birthdayYear');
        });
        expect(storedYear).toBe('1999.5.18');

        await bdayButton.dispose();
    });

    /**
     * Check that the settings text updates correctly with new name/birthday
     */
    it('Check that settings text updates', async () => {
        const settingsText = await page.$eval("#profile-display", (element) => {
            return element.innerHTML;
        });

        const expectedText = 'Welcome back <span class="highlight">Sample Name</span>! Your birthday on record is <span class="highlight">1999.5.18</span>';
        expect(settingsText).toBe(expectedText);
    });

    /**
     * Try to add a big birth year to make sure we don't have overflow issues
     */
    it('Check that >4-digit birth year goes in localStorage correctly', async () => {
        // Enter a birthday
        await page.$eval('#birthday', el => {
            el.value = '99999-12-31';
        });
        const bdayButton = await page.evaluateHandle(`document.querySelector("#save-birthday-form > input[type=submit]:nth-child(3)")`);
        await bdayButton.click();

        await page.goto(`http://localhost:${SERVER_PORT}/source/`);

        const storedBirthday = await page.evaluate(() => {
            return localStorage.getItem('birthday');
        });
        expect(storedBirthday).toBe('12.31');

        const storedYear = await page.evaluate(() => {
            return localStorage.getItem('birthdayYear');
        });
        expect(storedYear).toBe('99999.12.31');

        await bdayButton.dispose();
    });

    /**
     * Check that the settings text updates correctly with 5-digit birth year
     */
    it('Check that settings text updates with >4 digit birth year', async () => {
        const settingsText = await page.$eval("#profile-display", (element) => {
            return element.innerHTML;
        });

        const expectedText = 'Welcome back <span class="highlight">Sample Name</span>! Your birthday on record is <span class="highlight">99999.12.31</span>';
        expect(settingsText).toBe(expectedText);
    });

    /**
     * Check to make sure that the clear button clears both name and birthday from localstorage
     */
    it('Check that clear function works', async () => {
        // Set event listener to accept dialog when it pops up
        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        // Wait to accept dialog and reload home page
        await page.goto(`http://localhost:${SERVER_PORT}/source/`);

        // Click clear button
        const clearButton = await page.evaluateHandle(`document.querySelector("#settingpage > div > div > div > div.clear-profile > button")`);
        await clearButton.click();

        // Check that name and birthday are no longer stored
        const storedName = await page.evaluate(() => {
            return localStorage.getItem('name');
        });
        expect(storedName).toBe(null);

        const storedBirthday = await page.evaluate(() => {
            return localStorage.getItem('birthday');
        });
        expect(storedBirthday).toBe(null);

        const storedYear = await page.evaluate(() => {
            return localStorage.getItem('birthdayYear');
        });
        expect(storedYear).toBe(null);

        await clearButton.dispose();
    });
});