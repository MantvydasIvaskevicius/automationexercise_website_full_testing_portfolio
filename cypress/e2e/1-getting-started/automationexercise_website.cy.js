describe('Test Case 1: Register User', () => {

    it('Navigate to url "http://automationexercise.com"', () => {
        cy.launchBrowserMainSite();
        cy.url().should('include', 'automationexercise.com');
    });

    it('Verify that home page is visible successfully', () => {
        cy.visit('http://automationexercise.com')
        cy.get('h1').should('be.visible');
    });
    it('Click on "Signup / Login" button', () => {
        cy.visit('http://automationexercise.com/login')
        cy.get("a[href='/login']").click();
        
    });

    it("Verify 'New User Signup!' is visible", () => {
        cy.visit('http://automationexercise.com/login')
        cy.get("div[class='signup-form'] h2").should('be.visible')
    })
    it("Enter name and email address & 'Finish registration", () => {
        cy.visit('http://automationexercise.com/login')
        cy.get("input[placeholder='Name']").type(this.user.name);
        cy.get("input[data-qa='signup-email']").type(this.user.email);
        cy.get("button[data-qa='signup-button']").click();
        
        cy.get('b').should('be.visible');
        cy.get('#password').type(this.user.password);
        
        cy.get('#days').select(this.user.birthDate.day);
        cy.get('#months').select(this.user.birthDate.month);
        cy.get('#years').select(this.user.birthDate.year);
    
        if (this.user.preferences.newsletter) {
          cy.get('#newsletter').click();
        }
        if (this.user.preferences.optin) {
          cy.get('#optin').click();
        }
    
        cy.get('#first_name').type(this.user.personalInfo.firstName);
        cy.get('#last_name').type(this.user.personalInfo.lastName);
        cy.get('#company').type(this.user.personalInfo.company);
        
        cy.get('#address1').type(this.user.address.address1);
        cy.get('#address2').type(this.user.address.address2);
        cy.get('#country').select(this.user.address.country);
        cy.get('#state').type(this.user.address.state);
        cy.get('#city').type(this.user.address.city);
        cy.get('#zipcode').type(this.user.address.zipcode);
        cy.get('#mobile_number').type('+370666652654');
        cy.get("button[data-qa='create-account']").click();
        cy.wait(3000);
        cy.get("h2[class='title text-center'] b").should('have.text','Account Created!');
        cy.wait(3000);
        // cy.get('.btn.btn-primary').click();
        // cy.wait(3000);
        // cy.get("a[href='/delete_account']").click();
        // cy.wait(3000);
        // cy.get("h2[class='title text-center'] b").should('have.text','Account Deleted!')
        // cy.wait(3000);
        // cy.get('.btn.btn-primary').click();
        // cy.wait(3000);
        // cy.get('h1').should('be.visible');
    

    });

});
describe('Test Case 2: Login User with correct email and password', () => {


    it('Navigate to url "http://automationexercise.com"', () => {
        cy.visit('http://automationexercise.com')
        cy.url().should('include', 'automationexercise.com');
    });
    it('Verify that home page is visible successfully', () => {
        cy.visit('http://automationexercise.com')
        cy.get('h1').should('be.visible');
    });
    it("Click on 'Signup / Login' button",()=>{
        cy.visit('http://automationexercise.com')
        cy.get("a[href='/login']").click();
    });
    it("Verify 'Login to your account' is visible",()=>{
        cy.visit('https://automationexercise.com/login');
        cy.get("div[class='login-form'] h2").should('have.text','Login to your account');
    });
    it('Enter correct email address and password',()=>{
        cy.visit('https://automationexercise.com/login');
        cy.get("input[data-qa='login-email']").type("admin12352343333@gmail.com")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[data-qa='login-button']").click();
        cy.get("li:nth-child(10) a:nth-child(1)").should("be.visible");
        cy.get("a[href='/delete_account']").click();
        cy.get(".btn.btn-primary").click();
    })
});

describe('Test Case 3: Login User with incorrect email and password', () => {

    it('Navigate to url "http://automationexercise.com"', () => {
        cy.visit('http://automationexercise.com');
        cy.url().should('include', 'automationexercise.com');
    });
    it('Verify that home page is visible successfully', () => {
        cy.visit('http://automationexercise.com');
        cy.get('h1').should('be.visible');
    });
    it(" Click on 'Signup / Login' button", () => {
        cy.visit('http://automationexercise.com')
        cy.get("a[href='/login']").click();
    });
    it("Verify 'Login to your account' is visible",()=>{
        cy.visit('https://automationexercise.com/login');
        cy.get("div[class='login-form'] h2").should('be.visible').and('have.text', 'Login to your account');
      
    });
    it("Enter incorrect email address and password",()=>{
        cy.visit('https://automationexercise.com/login');
        cy.get("input[data-qa='login-email']").type("admin12352333@gmail.com");
        cy.get("input[placeholder='Password']").type("admin12");
        cy.get("button[data-qa='login-button']").click();
        cy.get("p[style='color: red;']").should('be.visible').and('have.text', 'Your email or password is incorrect!');
    });
  
});

describe('Test Case 4: Logout User', () => {
    it('Navigate to url "http://automationexercise.com"', () => {
        cy.visit('http://automationexercise.com')
        cy.url().should('include', 'automationexercise.com');
    });
    it('Verify that home page is visible successfully', () => {
        cy.visit('http://automationexercise.com')
        cy.get('h1').should('be.visible');
    });
    it("Click on 'Signup / Login' button",()=>{
        cy.visit('http://automationexercise.com')
        cy.get("a[href='/login']").click();
    });
    it("Verify 'Login to your account' is visible",()=>{
        cy.visit('https://automationexercise.com/login');
        cy.get("div[class='login-form'] h2").should('have.text','Login to your account');
    });
    it('Enter correct email address and password',()=>{
        cy.visit('https://automationexercise.com/login');
        cy.get("input[data-qa='login-email']").type("admin123523433333@gmail.com")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[data-qa='login-button']").click();
        cy.get("li:nth-child(10) a:nth-child(1)").should("be.visible");
        cy.get("a[href='/logout']").click();
        cy.get("div[class='login-form'] h2").should('be.visible').and('have.text', 'Login to your account');


});

});
describe('Test Case 5: Register User with existing email', () => {


    it('Navigate to url "http://automationexercise.com"', () => {
        cy.visit('http://automationexercise.com')
        cy.url().should('include', 'automationexercise.com');
    });
    it('Verify that home page is visible successfully', () => {
        cy.visit('http://automationexercise.com')
        cy.get('h1').should('be.visible');
    });
    it("Click on 'Signup / Login' button",()=>{
        cy.visit('http://automationexercise.com')
        cy.get("a[href='/login']").click();
        cy.get("div[class='signup-form'] h2").should('be.visible').and('have.text', 'New User Signup!');
        cy.get("input[placeholder='Name']").type("Admin");
        cy.get("input[data-qa='signup-email']").type("admin123523433333@gmail.com");
        cy.get("button[data-qa='signup-button']").click();
        cy.get("p[style='color: red;']").should('be.visible').and('have.text', 'Email Address already exist!');
    });


});








// describe('Test Case 1: Register User', () => {
//     beforeEach(() => {
//         cy.visit('http://automationexercise.com');
//     });

//     it('Verify that home page is visible successfully', () => {
//         cy.get('h1').should('be.visible');
//     });

//     it('Click on "Signup / Login" button and verify form visibility', () => {
//         cy.get("a[href='/login']").click();
//         cy.get('.signup-form h2').should('be.visible');
//     });

//     it('Enter name and email address & finish registration', () => {
//         cy.get("a[href='/login']").click();
//         cy.get("input[placeholder='Name']").type('Admin');
//         cy.get("input[data-qa='signup-email']").type('admin12352343333@gmail.com');
//         cy.get("button[data-qa='signup-button']").click();
        
//         cy.get('#password').type('admin123');
//         cy.get('#days').select('3');
//         cy.get('#months').select('March');
//         cy.get('#years').select('1995');
//         cy.get('#newsletter').check();
//         cy.get('#optin').check();
//         cy.get('#first_name').type('Admin');
//         cy.get('#last_name').type('User');
//         cy.get('#company').type('Admin Corp');
//         cy.get('#address1').type('123 Admin St');
//         cy.get('#country').select('United States');
//         cy.get('#state').type('Florida');
//         cy.get('#city').type('Eagle Lake');
//         cy.get('#zipcode').type('FL 34207');
//         cy.get('#mobile_number').type('(205) 755-9014');
//         cy.get("button[data-qa='create-account']").click();
        
//         cy.get("h2.title.text-center b").should('have.text', 'Account Created!');
//     });
// });


// describe('Test Case 2: Login User with correct email and password', () => {
//     beforeEach(() => {
//         cy.visit('http://automationexercise.com/login');
//     });

//     it("Verify 'Login to your account' is visible", () => {
//         cy.get('.login-form h2').should('have.text', 'Login to your account');
//     });

//     it('Enter correct email address and password', () => {
//         cy.get("input[data-qa='login-email']").type("admin12352343333@gmail.com");
//         cy.get("input[placeholder='Password']").type("admin123");
//         cy.get("button[data-qa='login-button']").click();
        
//         cy.get("a[href='/delete_account']").should("be.visible");
//     });
// });


// describe('Test Case 3: Login User with incorrect email and password', () => {
//     beforeEach(() => {
//         cy.visit('http://automationexercise.com/login');
//     });

//     it("Enter incorrect email address and password", () => {
//         cy.get("input[data-qa='login-email']").type("wrongemail@gmail.com");
//         cy.get("input[placeholder='Password']").type("wrongpass");
//         cy.get("button[data-qa='login-button']").click();
//         cy.get("p[style='color: red;']").should('have.text', 'Your email or password is incorrect!');
//     });
// });


// describe('Test Case 4: Logout User', () => {
//     beforeEach(() => {
//         cy.visit('http://automationexercise.com/login');
//     });

//     it('Login and logout successfully', () => {
//         cy.get("input[data-qa='login-email']").type("admin12352343333@gmail.com");
//         cy.get("input[placeholder='Password']").type("admin123");
//         cy.get("button[data-qa='login-button']").click();
        
//         cy.get("a[href='/logout']").click();
//         cy.get('.login-form h2').should('have.text', 'Login to your account');
//     });
// });


// describe('Test Case 5: Register User with existing email', () => {
//     beforeEach(() => {
//         cy.visit('http://automationexercise.com/login');
//     });

//     it("Attempt to register with an existing email", () => {
//         cy.get("input[placeholder='Name']").type("Admin");
//         cy.get("input[data-qa='signup-email']").type("admin12352343333@gmail.com");
//         cy.get("button[data-qa='signup-button']").click();
        
//         cy.get("p[style='color: red;']").should('have.text', 'Email Address already exist!');
//     });
// });
