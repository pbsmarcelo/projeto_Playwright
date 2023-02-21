import { expect, test } from "@playwright/test";

test('All product names beguin with "Sauce Labs"',async ( {page} ) => {
    //Login step
    await test.step('Loguin', async () => {
    await page.goto("https://www.saucedemo.com/");
    await expect(await page.title()).toBe("Swag Labs");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    })
    
    await test.step('Product title verification', async () => {
        test.fail();
        const titleListLocator = await page.locator('.inventory_item_name');
        const productTitleList = await titleListLocator.allTextContents();    
        
        for (const item of productTitleList){
            await expect(item.slice(0,10)).toBe('Sauce Labs');
        }

        });

});