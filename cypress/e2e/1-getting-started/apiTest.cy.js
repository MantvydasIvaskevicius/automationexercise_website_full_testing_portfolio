/// <reference types="cypress" />
const user = require("../../fixtures/user2.json")
describe('Api Tests', () => {
    it("API 1: Get All Products List", () => {
        cy.request({
            method: "GET",
            url: "https://automationexercise.com/api/productsList",
            failOnStatusCode: false,
        }).then((res) => {
            expect(res.status).to.eq(200);
            const parsedBody = JSON.parse(res.body);
            expect(parsedBody.responseCode).to.eq(200);
            expect(parsedBody.products).to.not.be.null;
            expect(parsedBody.products).to.be.an("array");
            parsedBody.products.forEach((item) => {
                expect(item).to.be.an("object");
                expect(item).to.have.all.keys("id", "name", "price", "brand", "category");
            });
        });
    });


    it("API 2: POST To All Products List", () => {
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/productsList",
            failOnStatusCode: false,
        }).then((res) => {
            expect(res.status).to.eql(200);
            const parsedBody = JSON.parse(res.body);
            expect(parsedBody.responseCode).to.eql(405);
            expect(parsedBody.products).to.not.be.null;
            expect(parsedBody.message).to.eql("This request method is not supported.");
        });
    });

    it("API 3: Get All Brands List", () => {
        cy.request({
            method: "GET",
            url: "https://automationexercise.com/api/brandsList",
            failOnStatusCode: false,
        }).then((res) => {
            expect(res.status).to.eql(200);
            const parsedBody = JSON.parse(res.body);
            expect(parsedBody.responseCode).to.eql(200);
            expect(parsedBody.products).to.not.be.null;
            parsedBody.brands.forEach((brand) => {
                expect(brand).to.be.an("object");
                expect(brand).to.have.all.keys("brand", "id");
            });
        });
    });

    it("API 4: PUT To All Brands List", () => {
        cy.request({
            method: "PUT",
            url: "https://automationexercise.com/api/brandsList",
            failOnStatusCode: false,
        }).then((res) => {
            expect(res.status).to.eql(200);
            const parsedBody = JSON.parse(res.body);
            expect(parsedBody.responseCode).to.eql(405);
            expect(parsedBody.products).to.not.be.null;
            expect(parsedBody.message).to.eql("This request method is not supported.");
        });
    });

    it("API 5: POST To Search Product", () => {
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/searchProduct",
            failOnStatusCode: false,
            form: true,
            body: {
                search_product: "tshirt",
            },
        }).then((res) => {
            console.log(res);
            const parsedBody = JSON.parse(res.body);
            expect(parsedBody.responseCode).to.eq(200);
            expect(parsedBody.products).to.not.be.null;
            expect(parsedBody.products).to.be.an("array");
            parsedBody.products.forEach((product) => {
                expect(product).to.be.an("object");
                expect(product).to.have.all.keys("id", "brand", "category", "name", "price");
            });
        });
    });

    it("API 6: POST To Search Product without search_product parameter", () => {
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/searchProduct",
            failOnStatusCode: false,
        }).then((res) => {
            const parsedBody = JSON.parse(res.body);
            expect(parsedBody.responseCode).to.eql(400);
            expect(parsedBody.products).to.not.be.null;
            expect(parsedBody.message).to.eql("Bad request, search_product parameter is missing in POST request.");
        });
    });

    it("API 7: POST To Verify Login with valid details", () => {
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/verifyLogin",
            failOnStatusCode: false,
            form: true,
            body: {
                email: user.email,
                password: user.password,
            },
        }).then((res) => {
            console.log(res)
            const parsedBody = JSON.parse(res.body)
            expect(parsedBody.responseCode).to.eq(200)
            expect(parsedBody.message).to.eq("User exists!")
        })
    })




});
