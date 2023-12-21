import { test, expect } from '@playwright/test';

test('select default dropdown', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/#')
    await expect(page).toHaveTitle('nopCommerce demo store')

    await page.click('.ico-register');

    await page.locator('id=gender-female').click;

    const firstName: string = 'Thuy Tien';
    const lastName: string = 'Nguyen';
    const email: string = 'tiennt4@vmogroup.com';
    const passWord: string = 'Tiennt4@vmogroup';

    await page.locator('id=FirstName').fill(firstName);
    await page.locator('id=LastName').fill(lastName);
    await page.locator('id=Email').fill(email);
    await page.locator('id=Password').fill(passWord);
    await page.locator('id=ConfirmPassword').fill(passWord);

    await page.locator('//select[@name="DateOfBirthDay"]').selectOption('16')
    await expect(page.locator('//select[@name="DateOfBirthDay"]')).toHaveValue('16');

    await page.locator('//select[@name="DateOfBirthMonth"]').selectOption('10')
    await expect(page.locator('//select[@name="DateOfBirthMonth"]')).toHaveValue('10');

    await page.locator('//select[@name="DateOfBirthYear"]').selectOption('1998')
    await expect(page.locator('//select[@name="DateOfBirthYear"]')).toHaveValue('1998');

    await page.locator('id=register-button').click;

})

test('Multiple Dropdown', async ({ page }) => {
    let basicSelect = '(//select[@multiple and not (@class)])[1]'
    await page.goto('http://multiple-select.wenzhixin.net.cn/templates/template.html?v=189&url=basic.html')
    await page.locator(basicSelect).selectOption([{ label: 'February' }, { label: 'April' }])
    // Verrify the options selected musst be something
    await expect(page.locator(basicSelect)).toHaveValues(['2', '4'])
    await expect(page.locator(basicSelect)).not.toHaveValues(['February', 'April'])
})

test('Editable Dropdown', async ({ page }) => {
    await page.goto('https://indrimuska.github.io/jquery-editable-select/')

    let parent = 'div#basic-place input'
    let child = 'div#basic-place li'
    await selectOptionInEditable(page, parent, child, 'Jaguar')
    await expect(page.locator(parent)).toHaveValue('Jaguar')
    await page.waitForTimeout(500);
    await selectOptionInEditable(page, parent, child, 'Ford')
    await expect(page.locator(parent)).toHaveValue('Ford')
    await page.waitForTimeout(500);
    await selectOptionInEditable(page, parent, child, 'Lancia')
    await expect(page.locator(parent)).toHaveValue('Lancia')
})

test('Multiple Custom Dropdown', async ({ page }) => {
    let parent = "(//button[@class='ms-choice'])[1]";
    let Child = "(//button[@class='ms-choice'])[1]/following-sibling::div//span";
    let select1: string[] = ['March', 'April'];
    let select2: string[] = ['January', 'september', 'October', 'November'];
    let select3: string[] = ['[Select all]'];
    await page.goto('http://multiple-select.wenzhixin.net.cn/templates/template.html?v=189&url=basic.html');
    await selectOptionMultipleCustomDropdown(page, parent, Child, select1);
    await page.waitForTimeout(2000);
    await areItemSelected(page, select1);

    await selectOptionMultipleCustomDropdown(page, parent, Child, select3);
    await page.waitForTimeout(2000);
    await areItemSelected(page, select3);

    await selectOptionMultipleCustomDropdown(page, parent, Child, select3);
    await selectOptionMultipleCustomDropdown(page, parent, Child, select2);
    await page.waitForTimeout(2000);
    await areItemSelected(page, select2);
})

async function selectOptionInEditable(page: any, parent: any, child: any, expectedText: string) {
    await page.fill(parent, expectedText);
    await page.waitForTimeout(500);
    await page.locator(child).filter({ hasText: expectedText }).click();
    await page.click(parent);
}
async function selectOptionMultipleCustomDropdown(page: any, parent: any, child: any, expectedText: string[]) {
    await page.click(parent);
    await page.waitForTimeout(500);

    for (let index = 0; index < expectedText.length; index++) {
        console.log(expectedText[index]);
        await page.locator(child).filter({ hasText: expectedText[index]}).click();
    } await page.click(parent);
}
async function areItemSelected(page: any, expectedText: string[]) {
    let numberItemSelected = expectedText.length
    let allItemSelectedText = await page.locator("(//button[@class='ms-choice']/span)[1]").textContent();
    if (numberItemSelected <= 3 && numberItemSelected > 0) {
        let status: boolean = true;
        expectedText.forEach(item => {
            if (!allItemSelectedText.includes(item)) {
                status = false;
                return status;
            }
        });
        return status;
    } else if (numberItemSelected >= 12) {
        return await expect(page.locator("//button[@class='ms-choice']/span[text()='All selected']")).toBeVisible();
    }
    else if (numberItemSelected > 3 && numberItemSelected < 12) {
        return await expect(page.locator("//button[@class='ms-choice']/span[text()='" + numberItemSelected + " of 12 selected']")).toBeVisible();

    } else {
        return false;
    }
}
