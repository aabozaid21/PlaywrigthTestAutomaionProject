const { expect} = require('@playwright/test');
exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page;
        this.email = page.getByPlaceholder('E-Mail Address');
        this.password = page.getByPlaceholder('Password');
        this.lgnBtn = page.locator("input[value='Login']"   )
        this.heading= page.getByRole('heading', { name: 'My Account' })
    }


    async login(email , password){
       // await this.email.waitFor({state: "visible"})
      //  await this.email.waitFor({state: "visible"})
        await this.email.fill(email);
        await this.password.fill(password)
       // await this.lgnBtn.waitFor({state: "visible"})
        await this.lgnBtn.click()
      //  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');  
    }


   
}