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
     * Check that characteristics button opens popup that displays the correct message
     */
    it('Check that characteristics popup displays correct message', async () => {
        const charButton = await page.evaluateHandle(`document.querySelector("#characteristics-button")`);
        await charButton.click();

        const text = await page.$eval("#lifepath-text", (element) => {
            return element.innerText;
        });
        const expectedText = 'For positive, as declared leaders, you own qualities like lateral thinking and creativity. Others might perceive you as self-centred and egoistic, but your leadership and nut-cracking quality is what makes people envious of you. Dynamic nature, heart to take a risk and succeed are some positives which do not come in everyone and anyone. For negative, it is quite evident that you are egoistic, self-centric and aggressive at times. You need to ensure that it does not reach a level that it starts to spoil things for you that you have built or earned. You mostly lose your cool when a problem pops up and lack patience. Overenthusiastic nature, dominating trait and at times the violent side of you might restrict your productivity and also be the reason for your downfall.';
        expect(text).toBe(expectedText);
        await charButton.dispose();

        // Close popup to set up for next test
        const xButton = await page.evaluateHandle(`document.querySelector("#lifepath-popup > div > a")`);
        await xButton.click();
        await page.goto(`http://localhost:${SERVER_PORT}/source/#lifepath-popup-box`);
        await xButton.dispose();
    });

    /**
     * Check that career button opens popup that displays the correct message
     */
    it('Check that career popup displays correct message', async () => {
        const careerButton = await page.evaluateHandle(`document.querySelector("#career-button")`);
        await careerButton.click();

        const text = await page.$eval("#lifepath-text", (element) => {
            return element.innerText;
        });
        const expectedText = 'You are a solo rider when it comes to career or business. You prefer to work alone and it is then when you outshine the most. The entrepreneur quality in you pushes to work hard and achieve any kind of goal. You tend to take your work too seriously, even when it is not needed. It leads to a lot of stress and you end up affecting your health. It is important to follow a healthy diet and a planned day to stay fit both physically and mentally. With such strong traits, you can also be a politician or go for strong posts like military, etc. You are a powerhouse of qualities, if you use them in the right way then success will be at your feet and there is no goal you cannot achieve. So, ensure to imbibe humility to sustain fame, success, and positivity in life.';
        expect(text).toBe(expectedText);
        await careerButton.dispose();

        // Close popup to set up for next test
        const xButton = await page.evaluateHandle(`document.querySelector("#lifepath-popup > div > a")`);
        await xButton.click();
        await page.goto(`http://localhost:${SERVER_PORT}/source/#lifepath-popup-box`);
        await xButton.dispose();
    });

    /**
     * Check that love button opens popup that displays the correct message
     */
    it('Check that love popup displays correct message', async () => {
        const loveButton = await page.evaluateHandle(`document.querySelector("#love-button")`);
        await loveButton.click();

        const text = await page.$eval("#lifepath-text", (element) => {
            return element.innerText;
        });
        const expectedText = 'Since you like to be the boss in most places, even in love life you are likely to do the same. You want to take charge and this can be a big drawback when you come across a person of the same life path number. Even with people who do not like to be dominated, you might face a problem, if you try to take charge all the time. Your inclination towards compromise is very less which can be a reason for a lot of differences in relations. You lack the art to talk things out to resolve, so might have to work on that to save your relation. Partnering with a person of the same life path number can be exciting as you both have a charismatic personality. However, it can be tricky too as you both might have a different perspective about career, relationship life, etc. It can be that you both aim for the same things but your dominating nature does not let you things work out well. Life path number 1 compatibility is best observed with people falling under 3, 5, and 6. They can be a good match for you, as they have flexible personalities and can get along with such kinds of traits and also enjoy a healthy relationship.';
        expect(text).toBe(expectedText);
        await loveButton.dispose();

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
