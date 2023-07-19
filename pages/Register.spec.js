
exports.Register = class Register {
    constructor (page){
        this.page = page;
        this.firstName = page.locator("input[name='firstname']")
        this.lastName = page.locator("input[name='lastname']" )
        this.email = page.locator("input[name='email']" )
        this.telephone = page.locator("input[name='telephone']" )
        this.password = page.locator("input[name='password']" )
        this.passwordConfirm = page.locator("input[name='confirm']" )
        this.privacyPloicy = page.getByText('I have read and agree to the Privacy Policy');
        this.continue = page.getByRole('button', { name: 'Continue' });
        this.successMessage = page.getByRole('heading', { name: ' Your Account Has Been Created!'})
        this.warning =  page.getByText('Warning: E-Mail Address is already registered!');



    }


    async Register(firstName , lastName, email ,telephone, password  ){

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.telephone.fill(telephone);
        await this.password.fill(password);
        await this.passwordConfirm.fill(password);
        await this.privacyPloicy.click();
        await this.continue.click();

    }



    
}

