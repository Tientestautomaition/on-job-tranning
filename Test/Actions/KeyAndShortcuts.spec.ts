import { test, expect } from '@playwright/test';

test('Keys and Shortcuts', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
    let username = ('//ul//b[1]')
    await (page.locator(username).dblclick());
    await page.keyboard.press('Control+KeyC');
    await page.locator("//input[@id='username']").click();
    await page.keyboard.press('Control+KeyV');
    await page.waitForTimeout(1000);
    let password = ('//b[2]')
    await (page.locator(password).dblclick());
    await page.keyboard.press('Control+KeyC');
    await page.locator("//input[@id='password']").click();
    await page.keyboard.press('Control+KeyV');
    await page.waitForTimeout(1000);
    await page.locator('#submit').click();
    await expect (page.locator("//h1[@class='post-title']")).toHaveText('Logged In Successfully');
})