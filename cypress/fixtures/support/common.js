export class Common {

    mainvisible() {
        cy.visit('https://www.automationexercise.com');
        cy.get('#slider-carousel > .carousel-inner').should('be.visible');
    }

    hpVisible() {
        cy.get('#slider-carousel > .carousel-inner').should('be.visible');
    }

    signUpLogInButton() {
        cy.get("a[href='/login']").click()
        cy.url().should('contain', 'https://www.automationexercise.com/login')
    }
    openContactPage() {
        cy.get("a[href='/contact_us']").click();
        cy.get("div[class='contact-form'] h2[class='title text-center']").should('be.visible').and('have.text', "Get In Touch");
    }
    contactsData() {
        cy.fixture('user').then((user) => {
            cy.get("input[placeholder='Name']").type(user.name);
            cy.get("input[placeholder='Email']").type(user.email);
            cy.get("input[placeholder='Subject']").type("Subject");
            cy.get("#message").type('Your Message Here');
            cy.get("input[value='Submit']").click();
            cy.get("a[class='btn btn-success'] span").click();
        });
    }
    openTestCase(){
        cy.get("header[id='header'] li:nth-child(5) a:nth-child(1)").click();
        cy.get("div[class='panel-group'] h5 span").should('contain', 'Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:')
    }

    sidebar(){
        cy.get("#accordian").should('be.visible')
    }
  
    

}
