import { Cart } from "../../fixtures/support/cart";
import { Checkout } from "../../fixtures/support/checkout";
import { Common } from "../../fixtures/support/common";
import { Login } from "../../fixtures/support/login";
import { Payment } from "../../fixtures/support/payment";
import { Products } from "../../fixtures/support/products";
import { Signup } from "../../fixtures/support/signup";
const common = new Common()
const signup = new Signup();
const login = new Login();
const products = new Products();
const cart = new Cart();
const checkout = new Checkout();
const payment = new Payment();
describe('automationexercise.com test scripts', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com');
        common.hpVisible();
    });
    it("Test Case 1: Register User", () => {
        common.signUpLogInButton();
        signup.signUpNameEmailClick();
        signup.AccCreateNDelete();
    });
    it("Test Case 2: Login User with correct email and password", () => {
        common.signUpLogInButton();
        login.loginData();
        login.verifyLogOut();
    });
    it("Test Case 3: Login User with incorrect email and password", () => {
        common.signUpLogInButton();
        login.loginDataWrong();
    });
    it("Test Case 4: Logout User", () => {
        common.signUpLogInButton();
        login.loginData();
        login.verifyLogOut();
        common.mainvisible();
    });
    it("Test Case 5: Register User with existing email", () => {
        common.signUpLogInButton();
        signup.signUpExistingClick();
    });
    it("Test Case 6: Contact Us Form", () => {
        common.openContactPage();
        common.contactsData();
        common.hpVisible();
    });
    it("Test Case 7: Verify Test Cases Page", () => {
        common.openTestCase();
    });
    it("Test Case 8: Verify All Products and product detail page", () => {
        products.prodClck();
        products.prodActions();
        products.prodVisible();
    });
    it("Test Case 9: Search Product", () => {
        products.prodClck();
        products.prodSearch();
        products.prodVerify();
    });
    it("Test Case 11: Verify Subscription in Cart page", () => {
        products.prodSub();
    });
    it("Test Case 12: Add Products in Cart", () => {
        products.prodAdd();

        cart.verifyProductsInCart();
    });
    it("Test Case 13: Verify Product quantity in Cart", () => {
        products.prodWiew();
        products.prodVisible();
        products.prodQuantity();
        cart.cartClick();
        cart.cartVerifyQuantity();
    });

    it("Test Case 14: Place Order: Register while Checkout", () => {
        products.prodAdd();

        cart.verifyProductsInCart();
        checkout.checkOutRegister();
        signup.signUpFaker();
        signup.AccCreate();
        cart.cart();
        cart.cartProcedChechoutBtn();
        checkout.checkOutadressVerify();
        checkout.checkOutCommect();
        payment.paymentDataNdelete();
    });

    it("Test Case 15: Place Order: Register before Checkout", () => {
        common.signUpLogInButton();
        signup.signUpFaker();
        signup.AccCreate();
       products.prodAddToCart();
        cart.cartClckNavbar();
        cart.cartPage();
        cart.cartProcedChechoutBtn();
        checkout.checkOutadressVerify();
        checkout.checkOutCommect();
        payment.paymentDataNdelete();
    });
    it("Test Case 16: Place Order: Login before Checkout", () => {
        common.signUpLogInButton();
        login.loginData();
        products.prodAddToCart();
        cart.cartClckNavbar();
        cart.cartPage();
        checkout.checkoutClck();
        checkout.checkOutadressVerify();
        checkout.checkOutCommect();
        payment.paymentData2();
    });
    it("Test Case 17: Remove Products From Cart", () => {
        products.prodAddToCart();
        cart.cartClckNavbar();
        cart.cartPage();
        cart.cartX();
    });
    it("Test Case 18: View Category Products", () => {
        common.sidebar();
        products.prodCategory();
        products.prodMenCategory();
    });
    it("Test Case 19: View & Cart Brand Products", () => {
        products.prodClck2();
    });
    it("Test Case 20: Search Products and Verify Cart After Login", () => {
        products.prodClck();
        products.prodSearch();
        products.prodToCart2()
        cart.cartPage();
        login.logClick();
        login.loginData();
        cart.cartPage();
    });
});
