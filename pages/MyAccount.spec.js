exports.MyAccount = class MyAccount {

    constructor(page) {

        this.page = page;
        this.editAccount = page.getByRole('link', { name: ' Edit your account information' });
        this.userNameFiled = page.getByPlaceholder('First Name');
        this.continuebBtn = page.getByRole('button', { name: 'Continue' });
        this.successMessage = page.getByText('Success: Your account has been successfully updated.');
        this.changePassword = page.getByRole('link', { name: ' Change your password' });
        this.passwordField = page.getByPlaceholder('Password', { exact: true });
        this.passwordConfirm = page.getByPlaceholder('Password Confirm');
        this.continuebBtn = page.getByRole('button', { name: 'Continue' });
        this.PasswordAlert = page.getByText('Success: Your password has been successfully updated.');
        this.EditAddress = page.getByRole('link', { name: ' Modify your address book entries' });
        this.NewAddress = page.getByRole('link', { name: 'New Address' });
        this.AddressSuccess = page.locator('//*[@id="account-address"]/div[1]');


    }

    async EditAccount(firstName) {

        await this.editAccount.click();
        await this.userNameFiled.fill(firstName);
        await this.continuebBtn.click()
     
    }

    async ChangePassword(password) {

       
        await this.changePassword.waitFor({state: "visible"});
        await this.changePassword.click();
        await this.passwordField.click();
        await this.passwordField.fill(password);
        await this.passwordConfirm.click();
        await this.passwordConfirm.fill(password);
        await this.continuebBtn.click();



    }

    async AddAddress(firstName,lastName,company ,address,city,postalCode) {

        await this.EditAddress.waitFor({state:"visible"});
        await this.EditAddress.click();
        await this.NewAddress.click();
        await this.page.getByPlaceholder('First Name').click();
        await this.page.getByPlaceholder('First Name').fill(firstName);
        await this.page.getByPlaceholder('Last Name').click();
        await this.page.getByPlaceholder('Last Name').fill(lastName);
        await this.page.getByPlaceholder('Company').click();
        await this.page.getByPlaceholder('Company').fill(company);
        await this.page.getByPlaceholder('Address 1').click();
        await this.page.getByPlaceholder('Address 1').fill(address);
        await this.page.getByPlaceholder('Address 2').click();
        await this.page.getByPlaceholder('Address 2').fill(address);
        await this.page.getByPlaceholder('City').click();
        await this.page.getByPlaceholder('City').fill(city);
        await this.page.getByPlaceholder('Post Code').click();
        await this.page.getByPlaceholder('Post Code').fill(postalCode);
        await this.page.getByRole('combobox', { name: 'Country*' }).selectOption('63');
        await this.page.getByRole('combobox', { name: 'Region / State*' }).selectOption('1011');
        await this.continuebBtn.click()

    }

}