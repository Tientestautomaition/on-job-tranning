import { test, expect } from '@playwright/test';

test('Drag and Drop HTML 4', async ({ page }) => {
    page.goto('https://automationfc.github.io/kendo-drag-drop/')
    let bigCircle = ("#droptarget");
    let smallCircle = ("#draggable");

    await expect(page.locator(bigCircle)).toHaveText('Drag the small circle here.')
    await page.locator(smallCircle).dragTo(page.locator(bigCircle));
    await expect(page.locator(bigCircle)).toHaveText('You did great!')

    let bigCircleBackgroundColor = await page.locator(bigCircle).evaluate((smallCircle) =>
        window.getComputedStyle(smallCircle).getPropertyValue('background-color')
    );
    console.log(bigCircleBackgroundColor);
    expect(bigCircleBackgroundColor).toBe('rgb(3, 169, 244)');

})
test('Drag and Drop HTML 5', async ({ page }) => {
    page.goto('https://automationfc.github.io/drag-drop-html5/')
    let columnA = page.locator("#column-a");
    let columnB = page.locator("#column-b");
    await expect(columnA).toHaveText('A')
    await expect(columnB).toHaveText('B')
    await columnA.dragTo(columnB)
    await expect(columnA).toHaveText('B')
    await expect(columnB).toHaveText('A')
    await columnB.dragTo(columnA)
    await expect(columnA).toHaveText('A')
    await expect(columnB).toHaveText('B')
})