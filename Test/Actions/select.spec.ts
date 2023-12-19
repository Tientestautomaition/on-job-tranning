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

test('Edittable Dropdown', async ({ page }) => {
    await page.goto('https://indrimuska.github.io/jquery-editable-select/')

    let parent = 'div#basic-place input'
    let child = 'div#basic-place li'
    await selectOptionInEditable(page, parent, child, 'Jaguar')
    await expect(page.locator(parent)).toHaveValue('Jaguar')
})
// async function selectOptionInDropdown(page: any, parent: any, child: any, expectedText: any) {
//     // Chờ cho cái element này được phép click
//     await page.waitForSelector(parent);
//     // 1 - Click vào 1 element cho nó xổ ra tất cả item
//     await page.click(parent);
//     // 2 - Wait cho tất cả element được load ra (có trong HTML/DOM)
//     await page.waitForSelector(child);
//     // Store lại tất cả element (item của dropdown)
//     const allItems = await page.$$(child);

//     for (const item of allItems) {
//         const itemText = await item.innerText();
//         if (itemText.trim() === expectedText) {
//             const isVisible = await item.isVisible();
//             if (isVisible) {
//                 // 3 - Nếu item mình cần chọn nó nằm trong view (nhìn thấy được) thì click vào
//                 await item.click();
//             } else {
//                 // 4- Nếu như item mình cần chọn k có nhìn thấy (che bên dưới) thì scroll xuống và click vào
//                 await item.scrollIntoViewIfNeeded();
//                 await item.click();
//             }
//             break; // Đã tìm thấy và xử lý item, có thể thoát khỏi vòng lặp
//         }
//     }
// }
 async function selectOptionInEditable(page: any, parent: any, child: any, expectedText: string) {
await page.fill(parent,expectedText);
await page.waitForTimeout(500);
await page.locator(child).filter({hasText: expectedText}).click();
await page.click(parent);
 }