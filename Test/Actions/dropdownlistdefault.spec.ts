import { test, expect } from '@playwright/test';

test('Handeling default dropdownlist', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/#')
    await expect(page).toHaveTitle('nopCommerce demo store')

    await page.click('.ico-register');

    await page.locator('id=gender-female').click;

    const firstName: string ='Thuy Tien';
    const lastName: string ='Nguyen';
    const email: string ='tiennt4@vmogroup.com';
    const passWord: string ='Tiennt4@vmogroup';

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