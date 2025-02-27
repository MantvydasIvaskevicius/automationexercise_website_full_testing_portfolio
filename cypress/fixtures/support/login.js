export class Login {

    loginData() {
        cy.get("div[class='login-form'] h2").should('have.text', 'Login to your account').and('be.visible');
        cy.get("input[data-qa='login-email']").type('adminator@gmail.com');
        cy.get("input[placeholder='Password']").type('admin123');
        cy.get("button[data-qa='login-button']").click();

    };
    verifyLogOut() {
        cy.fixture('user').then((user) => {
            cy.get('li > a').should('be.visible').and('contain.text', `Logged in as ${user.name}`);
            cy.get('.nav').contains('Logout').click();
        });
    }
    loginDataWrong() {
        cy.get("div[class='login-form'] h2").should('have.text', 'Login to your account').and('be.visible');
        cy.get("input[data-qa='login-email']").type('dontexist@gmail.com');
        cy.get("input[placeholder='Password']").type('admin123');
        cy.get("button[data-qa='login-button']").click();
        cy.get('p[style="color: red;"]').should('have.text', 'Your email or password is incorrect!').and('be.visible');

    };
    logClick(){
        cy.get("li:nth-child(4) a:nth-child(1)").click();
    }

}