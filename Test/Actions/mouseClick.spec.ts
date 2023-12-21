import { test, expect } from '@playwright/test';

test('Hover tooltip', async ({ page }) => {
    await page.goto('https://automationfc.github.io/jquery-tooltip/');
    await expect(page).toHaveURL('https://automationfc.github.io/jquery-tooltip/');
    await page.getByAltText('Tooltips').hover();
    await expect(page.locator("//div[@class='ui-tooltip-content']").isVisible).toBeTruthy();
})

test('Hover on Menu', async ({ page }) => {
    await page.goto('https://www.myntra.com/');
    await expect(page).toHaveURL('https://www.myntra.com');
    await page.locator("//a[@class='desktop-main'][text()='Kids']").hover();
    await page.locator("//a[@class='desktop-categoryName'][text()='Home & Bath']").click();
    await expect(page.locator("//h1[text()='Kids Home Bath']").isVisible).toBeTruthy;
})
test('Click and Select', async ({ page }) => {
    //Click + ctr
    await page.goto('https://automationfc.github.io/jquery-selectable/');
    let number = page.locator('ol#selectable>li') 
    await number.nth(0).click({modifiers: ['Control']});
    await number.nth(2).click({modifiers: ['Control']});
    await number.nth(3).click({modifiers: ['Control']});
    await expect (page.locator("ol#selectable>li[class*='ui-selected']")).toHaveCount(3)
})
test('Click and Hold', async ({ page }) => {
    //Click and Hold is Left Click
    await page.goto('https://letcode.in/buttons');
    let buttonHold = page.locator('h2') 
    await expect(buttonHold).toHaveText('Button Hold!');   
    await buttonHold.click({delay:3000});
    await expect(buttonHold).toHaveText('Button has been long pressed');   
})
test('Double click', async ({ page }) => {

    await page.goto('https://automationfc.github.io/basic-form/index.html');
    let button = page.locator("//button[text()='Double click me']") 
    await button.dblclick();
    await page.waitForTimeout(2000);
    await expect (page.locator("//p[@id='demo']")).toHaveText('Hello Automation Guys!');
})
test('Right click', async ({ page }) => {

    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');
    let button = page.locator("span.context-menu-one") 
    await button.click({ button: 'right' });
    await expect (page.locator(".context-menu-list.context-menu-root")).toBeVisible();
})
