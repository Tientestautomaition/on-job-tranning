import { test, expect } from '@playwright/test';

test('Upload single file', async ({ page }) => {
    await page.goto('https://qa-automation-practice.netlify.app/file-upload.html');
    let file = 'DNN_1396.jpg'
    await page.locator("//input[@id='file_upload']").setInputFiles(file);
    await page.pause();
    await page.locator("button[type='submit']").click();
    await page.pause();
    await expect(page.locator("#file_upload_response")).toHaveText('You have successfully uploaded "' + file + '"');
})
test('Upload multiple files', async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    let file0 = 'image1.jpg';
    let file1 = 'shoes.jpg';
    
    await page.locator("input[name='files[]']").setInputFiles([file0,file1]);
    await page.waitForTimeout(20000);
    await expect(page.locator("(//span[@class='preview'])")).toBeVisible();
    await page.locator("//button[@type='submit']").click();
    await expect (page.locator("//p[@class='name']//a[@title='"+file0 + "']")).toBeVisible();
    await expect (page.locator("//p[@class='name']//a[@title='"+file1 + "']")).toBeVisible();
})