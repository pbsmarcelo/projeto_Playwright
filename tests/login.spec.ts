import { expect, test } from "@playwright/test";

test.describe('Loguin tests', async () => {

    test('The user login with sucess', async ({ page }) =>{
        await page.goto("https://www.saucedemo.com/");
        await expect(await page.title()).toBe("Swag Labs");
    
        await page.locator('[data-test="username"]').fill("standard_user");
        await page.locator('[data-test="password"]').fill("secret_sauce");
    
        await page.locator('[data-test="login-button"]').click();
        await expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');
    
        const productTitle =  await page.locator('.header_secondary_container > span');
        await expect(productTitle).toHaveText('Products');
    
        //Para pausar o teste na ultima ação
        //await page.pause();
    
    });
    
    test('The user inserts a wrong password',async ( {page}) => {
        await page.goto("https://www.saucedemo.com/");
        
        await page.locator('[data-test="username"]').fill("standard_user");
        await page.locator('[data-test="password"]').fill("123456");
    
        await page.locator('[data-test="login-button"]').click();
    
        const errorText = await page.getByText('Epic sadface: Username and password do not match any user in this service');
        await expect(errorText).toBeVisible();
    
    } )

})

