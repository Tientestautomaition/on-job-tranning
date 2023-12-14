import { test, expect } from '@playwright/test';

test('Checkboxes and Radio button', async ({ page }) => {
    //Checkbox
    await page.goto('https://demos.telerik.com/kendo-ui/checkbox/index')
    await expect(page).toHaveTitle('Demo of core features in jQuery CheckBox widget | Kendo UI for jQuery')
    //Verify checkbox checked
    await expect(page.getByLabel('Rear side airbags')).toBeChecked()
    // verify checkbox not checked
    await expect(page.getByLabel('Luggage compartment cover')).not.toBeChecked
    await page.getByLabel('Luggage compartment cover').click
    await expect(page.getByLabel('Luggage compartment cover')).toBeChecked


    //Radio button
    await page.goto('https://demos.telerik.com/kendo-ui/radiobutton/index')
    await expect(page).toHaveTitle('Demo of core features in jQuery RadioButton widget | Kendo UI for jQuery')
    //Verify Readio button checked
    await expect(page.getByLabel('1.4 Petrol, 92kW')).toBeChecked()
    // verify Readio button checked
    await expect(page.getByLabel('1.8 Petrol, 118kW')).not.toBeChecked

    await page.getByLabel('1.8 Petrol, 118kW').click
    await expect(page.getByLabel('1.8 Petrol, 118kW')).toBeChecked
})