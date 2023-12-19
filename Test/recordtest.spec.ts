import { test, expect } from '@playwright/test';

test('record test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await expect(page.getByRole('img', { name: 'Facebook' })).toBeVisible();
  await page.getByTestId('royal_email').click();
  await page.getByTestId('royal_email').fill('tttttttttt');
  await page.getByTestId('royal_pass').click();
  await page.getByTestId('royal_pass').fill('123456789');
  await page.getByTestId('royal_login_button').click();
  await expect(page.getByText('check fail - The password that you\'ve')).toBeVisible();
});