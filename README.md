# 🚀 Automation Exercise - Cypress Tests

## 📌 Overview

This repository includes automated tests for an e-commerce website, using the Cypress framework. The tests check both the UI and API functionality.

---


## 🖥️ UI Test Cases
These test cases validate the user interface and its interactions.

### 🔑 Authentication
- [x] Register a new user
- [x] Login with correct email and password
- [x] Login with incorrect email and password
- [x] Logout functionality
- [x] Attempt to register with an existing email

### 📞 User Interactions
- [x] Submit the "Contact Us" form
- [x] Verify the "Test Cases" page

### 🛍️ Product & Cart Management
- [x] View all products and product detail pages
- [x] Search for a product
- [x] Verify subscription feature on the home page
- [x] Verify subscription feature on the cart page
- [x] Add products to the cart
- [x] Verify product quantity in the cart
- [x] Remove products from the cart
- [x] View category-based products
- [x] View & add brand-based products
- [x] Search for products and verify cart after login
- [x] Add a review for a product
- [x] Add to cart from "Recommended Items"

### 🛒 Checkout & Order Processing
- [x] Place an order with a new user registration during checkout
- [x] Place an order with a registered user before checkout
- [x] Place an order after logging in before checkout
- [x] Verify address details in the checkout page
- [x] Download invoice after purchase

### 🔄 UI Navigation & Scrolling
- [x] Verify scroll up functionality using the 'Arrow' button
- [x] Verify scroll up functionality without the 'Arrow' button
- [x] Verify scroll down functionality

---

## 🔗 API Test Cases
These test cases ensure that API endpoints function as expected.

### 📦 Product & Brand APIs
- [x] GET all products list
- [x] POST to all products list
- [x] GET all brands list
- [x] PUT to all brands list

### 🔍 Search & Authentication APIs
- [x] POST to search product
- [x] POST to search product without the **search_product** parameter
- [x] POST to verify login with valid details
- [x] POST to verify login without the **email** parameter
- [x] DELETE method to verify login
- [x] POST to verify login with invalid details

### 👤 User Account APIs
- [x] POST to create/register user account
- [x] DELETE method to delete user account
- [x] PUT method to update user account
- [x] GET user account details by email

---

### 🚀 Testing Guidelines
- Ensure all tests are executed in both **staging** and **production** environments.
- Log test results, errors, and edge cases for further analysis.
- Automate repetitive UI test cases where possible using **Selenium**.

Happy Testing! 🧪✅


---

## ⚙️ Installation & Setup

### 🔹 Prerequisites

- Install [Node.js](https://nodejs.org/)
- Install Cypress

### 🔹 Installation Steps

1️⃣ Clone the repository:

```sh
https://github.com/MantvydasIvaskevicius/automationexercise_website_full_testing_portfolio.git
```

2️⃣ Navigate to the project directory:

```sh
cd your-repo-name
```

3️⃣ Install dependencies:

```sh
npm install
```

---

## 🏃 Running Tests

### 🔹 Open Cypress Test Runner

```sh
npx cypress open
```

### 🔹 Run Tests in Headless Mode

```sh
npx cypress run
```

### 🔹 Run Tests in Specific Browsers

```sh
npm run test:chrome    # Run in Chrome
npm run test:firefox   # Run in Firefox
npm run test:edge      # Run in Edge
npm run test:electron  # Run in Electron
```



