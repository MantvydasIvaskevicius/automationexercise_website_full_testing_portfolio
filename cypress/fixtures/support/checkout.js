export class Checkout{
    checkOutRegister(){
        cy.get(".btn.btn-default.check_out").click();
        cy.get("div[class='modal-body'] a").click();
    }
    checkOutadressVerify(){
        cy.get("#address_delivery").should('be.visible');
        cy.get("#address_invoice").should('be.visible');
    }
    checkOutComment(){
        cy.get("textarea[name='message']").type('send ASAP')
        cy.get('.btn.btn-default.check_out').click();
    }
    checkoutClck(){
        cy.get(".col-sm-6 > .btn").click();
    }

    
}