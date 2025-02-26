export class Cart {
    cartClckNavbar(){
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    }

    cartClick() {
        cy.get(':nth-child(5) > .btn').should('contain', 'Add to cart').click()
        cy.contains('View Cart').click()
        cy.get('.quantity').should('contain', 'Quantity')
        cy.get('.disabled').contains('4')

    }
    cartVerifyQuantity() {
        cy.get("tr[id='product-1'] button[class='disabled']").should('contain', '4');
    }
    verifyProductsInCart() {
        cy.get('.price').should('contain', 'Price')
        cy.get('.quantity').should('contain', 'Quantity')
        cy.get('.total').should('contain', 'Total')
    }
    cartProcedChechoutBtn() {
        cy.get(".btn.btn-default.check_out").click();

    }
    cartAddProductToCart() {
        cy.get("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)").click();
        cy.get('.btn.btn-success.close-modal.btn-block').click();
    }
    cartPage() {
        cy.url().should('contain', 'https://www.automationexercise.com/view_cart')
    }
    cartX() {
        cy.get(".fa.fa-times").click();
        cy.get("p[class='text-center'] b").should('be.visible').and('contain', 'Cart is empty!');

    }
    cartPage() {
        cy.scrollTo('top');
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get("#product-1").should('be.visible');
    }
    cart(){
        cy.get("body > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").click();
    }
    test(){
        cy.get(":nth-child(5) > .btn")
        .should('contain', 'Add to cart')
        .click()
    }


}



