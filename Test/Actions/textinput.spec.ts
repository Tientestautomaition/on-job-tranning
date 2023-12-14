import { test, expect } from '@playwright/test';

test ('Fill text on textbox', async ({page}) => {
   await page.goto('https://demo.guru99.com/V4/manager/addAccount.php');
   await expect(page).toHaveTitle('Guru99 bank add new account')

  const nameCus: string = 'tomsmith';

   await page.locator('//input[@name="cusid"]').fill(nameCus);
   await page.locator('//input[@name="inideposit"]').fill('tomsmith');
})