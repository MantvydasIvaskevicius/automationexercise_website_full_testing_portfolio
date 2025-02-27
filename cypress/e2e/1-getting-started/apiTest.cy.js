/// <reference types="cypress" />
const user = require("../../fixtures/user2.json")
const user2 = require("../../fixtures/user3.json")
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

            const parsedBody = JSON.parse(res.body)
            expect(parsedBody.responseCode).to.eq(200)
            expect(parsedBody.message).to.eq("User exists!")
        });
    });


    it("API 8: POST To Verify Login without email parameter", () => {
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/verifyLogin",
            failOnStatusCode: false,
            form: true,
            body: {
                password: user.password,
            },
        }).then((res) => {
            const parsedBody = JSON.parse(res.body)
            expect(parsedBody.responseCode).to.eq(400)
            expect(parsedBody.message).to.eq("Bad request, email or password parameter is missing in POST request.")
        });
    });
    it("API 9: DELETE To Verify Login", () => {
        cy.request({
            method: "DELETE",
            url: "https://automationexercise.com/api/verifyLogin",
            failOnStatusCode: false,
            form: true,
        }).then((res) => {
            const parsedBody = JSON.parse(res.body);
            expect(parsedBody.products).to.not.be.null;
            expect(parsedBody.responseCode).to.eq(405)
            expect(parsedBody.message).to.eq("This request method is not supported.")
        });
    });
    it("API 10: POST To Verify Login with invalid details", () => {
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/verifyLogin",
            failOnStatusCode: false,
            form: true,
            body: {
                email: "admin123@gmail.com",
                password: "admin123",
            },
        }).then((res) => {
            const parsedBody = JSON.parse(res.body);
            expect(parsedBody.products).to.not.be.null;
            expect(parsedBody.responseCode).to.eq(404)
            expect(parsedBody.message).to.eq("User not found!")
        });
    });
    it("API 11: POST To Create/Register User Account", () => {
        cy.request({
            method: "POST",
            url: " https://automationexercise.com/api/createAccount",
            failOnStatusCode: false,
            form: true,
            body: {
                name: user2.name,
                email: user2.email,
                password: user2.password,
                title: "Mr",
                birth_date: user2.birthDate.day,
                birth_month: user2.birthDate.month,
                birth_year: user2.birthDate.year,
                firstname: user2.personalInfo.firstName,
                lastname: user2.personalInfo.lastName,
                company: user2.personalInfo.company,
                address1: user2.address.address1,
                address2: user2.address.address2,
                country: user2.address.country,
                state: user2.address.state,
                city: user2.address.city,
                zipcode: user2.address.zipcode,
                mobile_number: user2.address.phone,

            },
        }).then((res) => {
       
            const parsedBody = JSON.parse(res.body)
            expect(parsedBody.responseCode).to.eq(201)
            expect(parsedBody.message).to.eq("User created!")
        })
    })

    it("API 12: DELETE METHOD To Delete User Account", () => {
        cy.request({
            method: "DELETE",
            url: "https://automationexercise.com/api/deleteAccount",
            failOnStatusCode: false,
            form: true,
            body: {
                email: user2.email,
                password: user2.password,
            },
        }).then((res) => {
            const parsedBody = JSON.parse(res.body);
            expect(parsedBody.products).to.not.be.null;
            expect(parsedBody.responseCode).to.eq(200)
            expect(parsedBody.message).to.eq("Account deleted!")
        });
    });

    it("API 13: PUT METHOD To Update User Account", () => {
        cy.request({
            method: "PUT",
            url: "https://automationexercise.com/api/updateAccount",
            failOnStatusCode: false,
            form: true,
            body: {
                name: "updatoratorius",
                email: user.email,
                password: user.password,
                title: "Mr",
                birth_date: user.birthDate.day,
                birth_month: user.birthDate.month,
                birth_year: user.birthDate.year,
                firstname: user.personalInfo.firstName,
                lastname: user.personalInfo.lastName,
                company: user.personalInfo.company,
                address1: user.address.address1,
                address2: user.address.address2,
                country: user.address.country,
                state: user.address.state,
                city: user.address.city,
                zipcode: user.address.zipcode,
                mobile_number: user.address.phone,
            },
        }).then((res) => {
            const parsedBody = JSON.parse(res.body)
            expect(parsedBody.responseCode).to.eq(200)
            expect(parsedBody.message).to.eq("User updated!")
        })
    })

 it("API 14: GET user account detail by email", () => {
        cy.request({
            method: "GET",
            url: `https://automationexercise.com/api/getUserDetailByEmail?email=${user.email}`,
            failOnStatusCode: false,
        }).then((res) => {
            const parsedBody = JSON.parse(res.body)
            expect(parsedBody.responseCode).to.eq(200)
            expect(parsedBody.user).to.not.be.null
            expect(parsedBody.user).to.be.an("object")
            expect(parsedBody.user).to.have.all.keys("id","name","email","title","birth_day","birth_month","birth_year","first_name","last_name","company","address1","address2","country","state","city","zipcode")
        });
    });



});
