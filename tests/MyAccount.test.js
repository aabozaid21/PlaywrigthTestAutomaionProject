import { test, expect } from '@playwright/test';
const data = require('../test-data/userData.json')
const { HomePage } = require('../pages/HomePage.spec.js')
const { LoginPage } = require('../pages/LoginPage.spec.js')
const { MyAccount } = require('../pages/MyAccount.spec.js')


test.describe('My Account', async () => {
  let homePage
  let loginPage
  let myAccount
  const data = require('../test-data/userData.json')
  test.beforeEach(async ({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/')
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    await homePage.openLoginPage();
    await loginPage.login(data[1].userName, data[1].password)
    myAccount = new MyAccount(page);

  })
  test('Edit Account information', async ({ page }) => {


    await myAccount.EditAccount('alaa21')
    const message = await myAccount.successMessage
    expect(message).toBeTruthy();

  })


  test('Change Password ', async ({ page }) => {

    await myAccount.ChangePassword(data[1].password);
    const Alert = await myAccount.PasswordAlert
    expect(Alert).toBeTruthy();

  })

  test('Add New Address', async ({ page }) => {

    await myAccount.AddAddress(data[2].firstName, data[2].lastName, data[2].company, data[2].company, data[2].address, data[2].postalCode);
    const sucess = await myAccount.AddressSucces
    //await expect(sucess).toContainText('Your address has been successfully added');
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })
})
