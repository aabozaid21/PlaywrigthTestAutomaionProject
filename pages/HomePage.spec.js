

exports.HomePage = class HomePage {
     constructor(page){
          this.page= page;
          this. myAccount = page.getByRole('button', { name: ' My account' });
          this.login =  page.getByText( 'Login');
          this.register = page.getByText( 'Register') ;
          this.logoutbtn = page.getByRole('link', { name: ' Logout' })   
      }

     async openLoginPage(){


         /// await this.myAccount.waitFor({state: "visible"}).hover()
          await this.myAccount.waitFor({state: "visible"})
          await this.myAccount.hover();
          await this.login.waitFor({state: "visible"})
          await this.login.hover()
          await this.login.click();
          //await this.waitForNavigation();
          
     }

     async openRegisterPage(){

          await this.myAccount.hover();
          await this.register.click();
          //await this.waitForNavigation();
          
     }

     async logout(){

          await this.myAccount.hover();
          await this.logoutbtn.waitFor({state: "visible"})
          await this.logoutbtn.click();

      }
}