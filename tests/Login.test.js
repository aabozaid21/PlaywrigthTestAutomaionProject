
const { test, expect ,page} = require('@playwright/test');
//test.describe.configure({ mode: 'serial' });
const { HomePage } = require('../pages/HomePage.spec');
const { LoginPage } = require('../pages/LoginPage.spec');



test.describe('Login Test', () => {

  const data = require('../test-data/userData.json')
  let homePage;
  let loginPage;

  test.beforeEach(async ({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/')
    homePage = new HomePage(page)
    await homePage.openLoginPage();
    loginPage = new LoginPage(page);
    await loginPage.login(data[1].userName, data[1].password)
  })

  test('Login with valid credentials', async ({page}) => {

    //await loginPage.login(data[1].userName, data[1].password)
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');  
    await expect(page).toHaveTitle("My Account");

  });

  test('Logout From Account', async ({page}) => {

    await homePage.logout()
    await expect(page).toHaveTitle("Account Logout");
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

});
