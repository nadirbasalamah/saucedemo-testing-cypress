# saucedemo-testing-cypress

Web testing example using Cypress.

## Notes

1. The web application that is used for testing is [saucedemo.com](https://saucedemo.com/).

2. This is the list of features that are already tested.

| **Feature Name** | **Spec File**  |
| ---------------- | -------------- |
| Login            | `login.cy.js`  |
| Logout           | `logout.cy.js` |
| Cart             | `cart.cy.js`   |

## How to Use

1. Clone this repository.

2. Install the dependencies.

```sh
npm install
```

3. Run the tests.

```sh
npx cypress run --spec "cypress/e2e/*.cy.js"
```
