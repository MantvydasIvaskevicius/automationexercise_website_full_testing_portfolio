export class Products {

    prodClck() {
        cy.get("a[href='/products']").click();
        cy.get(".title.text-center").should('have.text', 'All Products').and('be.visible');
    }
    prodActions() {
        cy.get(".features_items").should('be.visible')
        cy.get("a[href='/product_details/1']").click();
    }
    prodVisible() {
        cy.get("div[class='product-information'] h2").and('be.visible');
        cy.get(".product-information > :nth-child(3)").and('be.visible');
        cy.get(":nth-child(5) > span").and('be.visible');
        cy.get(".product-information > :nth-child(6)").and('be.visible');
        cy.get(".product-information > :nth-child(7)").and('be.visible');
        cy.get(".product-information > :nth-child(8)").and('be.visible');

    }
    prodSearch() {
        cy.get('#search_product').type('Blue Top');
        cy.get('#submit_search').click();
    }
    prodVerify() {
        cy.get('.product-image-wrapper').should('be.visible');
        cy.url().should('contain', 'https://www.automationexercise.com/products?search=Blue%20Top');
    }
    prodSub() {
        cy.fixture('user').then((user) => {
            cy.scrollTo('bottom');
            cy.get("div[class='single-widget'] h2").should('have.text', 'Subscription').and('be.visible');
            cy.get('#susbscribe_email').type(user.email);
            cy.get('#subscribe').click();
            cy.get('.alert-success.alert').should('be.visible').and('contain', 'You have been successfully subscribed!');
        });
        
    }

    // prodverifyadd(){
    //     cy.get("a[href='/product_details/1']").click()  
    //     cy.get(".product-information > h2").should('contain', 'Blue Top')
    //     cy.get(".product-information > :nth-child(3)").should('contain', 'Category: Women > Tops')
    //     cy.get(":nth-child(5) > span").should('contain', 'Rs. 500')
    //     cy.get(".product-information > :nth-child(6)").should('contain', 'Availability:').should('contain', ' In Stock')
    //     cy.get(".product-information > :nth-child(7)").should('contain', 'Condition:')
    //     cy.get(".product-information > :nth-child(8)").should('contain', 'Brand:').should('contain', ' Polo')
    // }
    
    
    prodAdd() {
        cy.get("a[href='/products']").click();
        cy.get(":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img").trigger('mouseover');
        cy.contains('Add to cart').click()
        cy.get('.modal-footer > .btn').should('contain', 'Continue Shopping').click();
        cy.get(":nth-child(4) > .product-image-wrapper > .single-products > .productinfo > img").trigger('mouseover');
        cy.contains('Add to cart').click()
        cy.contains('View Cart').click()
        // cy.get("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)").click()
        // cy.get('.btn.btn-success.close-modal.btn-block').click()

    }
    prodWiew() {
        cy.get("a[href='/product_details/1']").click();

    }
    prodQuantity() {
        cy.get("#quantity").clear().type('4');
    }
    prodAddToCart() {
        cy.get("button[type='button']").click();
        cy.get(".btn.btn-success.close-modal.btn-block").click();

    }
    prodCategory() {
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click();
        cy.get("a[href='/category_products/2']").click();
        cy.get(".title.text-center").should('be.visible').and('have.text', 'Women - Tops Products');

    }
    prodMenCategory() {
        cy.get(":nth-child(2) > .panel-heading > .panel-title > a").click();
        cy.get("a[href='/category_products/3']").click();
        cy.get(".title.text-center").should('be.visible').and('have.text', 'Men - Tshirts Products');
    }

    prodClck2() {
        cy.get("a[href='/products']").click();
        cy.get(".brands-name").should('be.visible');
        cy.get("a[href='/brand_products/Polo']").click();
        cy.get(".title.text-center").should('be.visible').and('have.text', 'Brand - Polo Products');
    }
    prodToCart2() {
        cy.get("div[class='productinfo text-center'] p").should('be.visible').and('have.text', 'Blue Top');
        cy.get("div[class='productinfo text-center'] a[class='btn btn-default add-to-cart']").click();
        cy.get(".btn.btn-success.close-modal.btn-block").click();
    }
    prodAddToCart(){
        cy.get("a[href='/products']").click();
        cy.get(":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img").trigger('mouseover');
        cy.contains('Add to cart').click()
        cy.get('.modal-footer > .btn').should('contain', 'Continue Shopping').click();
    }
    



}