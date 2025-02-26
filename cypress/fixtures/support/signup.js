const { faker } = require('@faker-js/faker');

export class Signup {
    signUpNameEmailClick() {
        cy.fixture('user').then((user) => {
            cy.get("div[class='signup-form'] h2").should('be.visible');
            cy.get("input[placeholder='Name']").type(user.name);
            cy.get("input[data-qa='signup-email']").type(user.email);
            cy.get("button[data-qa='signup-button']").click();
        });
    }


    AccCreateNDelete() {
        cy.fixture('user').then((user) => {
        cy.get('.login-form > h2.title.text-center').should('be.visible').and('have.text', 'Enter Account Information');
        // cy.get('#name').type(user.name);
        cy.get('#password').type(user.password);
        cy.get('#days').select(user.birthDate.day);
        cy.get('#months').select(user.birthDate.month);
        cy.get('#years').select(user.birthDate.year);
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.get('#first_name').type(user.personalInfo.firstName);
        cy.get('#last_name').type(user.personalInfo.lastName);
        cy.get('#company').type(user.personalInfo.company);
        cy.get('#address1').type(user.address.address1);
        cy.get('#address2').type(user.address.address2);
        cy.get('#country').select(user.address.country);
        cy.get('#state').type(user.address.state);
        cy.get('#city').type(user.address.city);
        cy.get('#zipcode').type(user.address.zipcode); 
        cy.get('#mobile_number').type(user.address.phone);
        cy.get("button[data-qa='create-account']").click();
        cy.get("h2[class='title text-center'] b").should('be.visible').and('have.text', 'Account Created!');
        cy.get(".btn.btn-primary").click();
        cy.get("a[href='/delete_account']").click();
        cy.get("h2[class='title text-center'] b").should('be.visible').and('have.text', 'Account Deleted!');
        cy.get(".btn.btn-primary").click();
        })
    };

    signUpExistingClick() {
        cy.fixture('user').then((user) => {
            cy.get("div[class='signup-form'] h2").should('be.visible');
            cy.get("input[placeholder='Name']").type(user.name);
            cy.get("input[data-qa='signup-email']").type("adminator@gmail.com");
            cy.get("button[data-qa='signup-button']").click();
            cy.get('p[style="color: red;"]').should('have.text', 'Email Address already exist!').and('be.visible');
        });
    }

    signUpFaker(){
        cy.get("input[placeholder='Name']").type(faker.person.firstName());
        cy.get("input[data-qa='signup-email']").type(faker.internet.email());
        cy.get("button[data-qa='signup-button']").click();
    }
    AccCreate(){
        cy.fixture('user').then((user) => {
            cy.get('#password').type(user.password);
            cy.get('#days').select(user.birthDate.day);
            cy.get('#months').select(user.birthDate.month);
            cy.get('#years').select(user.birthDate.year);
            cy.get('#newsletter').click();
            cy.get('#optin').click();
            cy.get('#first_name').type(user.personalInfo.firstName);
            cy.get('#last_name').type(user.personalInfo.lastName);
            cy.get('#company').type(user.personalInfo.company);
            cy.get('#address1').type(user.address.address1);
            cy.get('#address2').type(user.address.address2);
            cy.get('#country').select(user.address.country);
            cy.get('#state').type(user.address.state);
            cy.get('#city').type(user.address.city);
            cy.get('#zipcode').type(user.address.zipcode); 
            cy.get('#mobile_number').type(user.address.phone);
            cy.get("button[data-qa='create-account']").click();
            cy.get("h2[class='title text-center'] b").should('be.visible').and('have.text', 'Account Created!');
            cy.get(".btn.btn-primary").click();
        });
    }
    AccCreate2(){
        cy.fixture('user').then((user) => {
            cy.get('#password').type(user.password);
            cy.get('#days').select(user.birthDate.day);
            cy.get('#months').select(user.birthDate.month);
            cy.get('#years').select(user.birthDate.year);
            cy.get('#newsletter').click();
            cy.get('#optin').click();
            cy.get('#first_name').type(user.personalInfo.firstName);
            cy.get('#last_name').type(user.personalInfo.lastName);
            cy.get('#company').type(user.personalInfo.company);
            cy.get('#address1').type(user.address.address1);
            cy.get('#address2').type(user.address.address2);
            cy.get('#country').select(user.address.country);
            cy.get('#state').type(user.address.state);
            cy.get('#city').type(user.address.city);
            cy.get('#zipcode').type(user.address.zipcode); 
            cy.get('#mobile_number').type(user.address.phone);
            cy.get("button[data-qa='create-account']").click();
            cy.get("h2[class='title text-center'] b").should('be.visible').and('have.text', 'Account Created!');
            cy.get(".btn.btn-primary").click();
        });
    }
}