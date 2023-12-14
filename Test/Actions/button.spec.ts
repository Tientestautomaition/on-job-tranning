import { test, expect } from '@playwright/test';

test('Handeling button', async ({page}) => {
    await page.goto('https://www.fahasa.com/customer/account/login/')
    await expect(page).toHaveTitle('Khách hàng đăng nhập - FAHASA.COM')

    //Verify button disable
    await expect(page.getByTitle('Đăng nhập')).toBeDisabled
    await page.locator('id=login_username').fill('tiennt4@vmogroup.com')
    await page.locator('id=login_password').fill('tiennt4@vmogroup')
    //Verify button enable khi da nhap du thong tin
    await expect(page.getByTitle('Đăng nhập')).toBeEnabled
    //cach khac
    await expect(page.getByTitle('Đăng nhập')).not.toBeDisabled

})