const { test, expect } = require('@playwright/test');
//test.describe.configure({ mode: 'serial' });
const { HomePage } = require('../pages/HomePage.spec.js');
const { Register } = require('../pages/Register.spec.js');
const data = require('../test-data/userData.json')

var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var string = '';
for (var ii = 0; ii < 15; ii++) {
  string += chars[Math.floor(Math.random() * chars.length)];
}
var email = string + '@gmail.com';

test.describe('Register scenarion', async () => {

  let homePage;
  let register;
  test.beforeEach(async ({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/')
    homePage = new HomePage(page);
    await homePage.openRegisterPage();
    register = new Register(page);

  })

  test('Create New Account', async ({ page }) => {

    // console.log(userData);

    await register.Register(data[0].firstName, data[0].lastName, email, data[0].telephone, data[0].password);
    expect(register.successMessage).toBeTruthy();
    //  await page.close() 


  });


  test('Create  Account with registred email', async ({ page }) => {

    await register.Register(data[0].firstName, data[0].lastName, data[0].email, data[0].telephone, data[0].password);
    expect(register.warning).toBeTruthy();
    //await page.close() 



  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

});

