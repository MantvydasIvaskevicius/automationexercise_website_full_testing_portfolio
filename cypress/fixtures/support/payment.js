const { faker } = require('@faker-js/faker');

export class Payment {
    paymentDataNdelete() {
        cy.get("input[name='name_on_card']").type("adminator");
        cy.get("input[name='card_number']").type("1651651651644");
        cy.get("input[placeholder='ex. 311']").type("002");
        cy.get("input[placeholder='MM']").first().type("05");
        cy.get("input[placeholder='YYYY']").type("2020");  
        cy.get("#submit").click();
        cy.get(".btn.btn-primary").click();
        cy.get("a[href='/delete_account']").click();
        cy.get("h2[class='title text-center'] b").should('be.visible').and('have.text', 'Account Deleted!');
        cy.get(".btn.btn-primary").click();
    }


    paymentData2() {
        cy.get("input[name='name_on_card']").type("adminator");
        cy.get("input[name='card_number']").type("1651651651644");
        cy.get("input[placeholder='ex. 311']").type("002");
        cy.get("input[placeholder='MM']").first().type("05");
        cy.get("input[placeholder='YYYY']").type("2020");  
        cy.get("#submit").click();
        cy.get("div[class='col-sm-9 col-sm-offset-1'] p").should('be.visible').and('contain', 'Congratulations! Your order has been confirmed!');
        cy.get(".btn.btn-primary").click();
    
   
    }
}


