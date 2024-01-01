# saucedemo-testing-cypress

Web testing example using Cypress with BDD support.

## Notes

1. There are two branches in this repository:

- `main`: complete version with BDD support.
- `simple`: simple version without BDD support.

Each branch has specific `How to Use` guide. Please read that guide based on the branch that chosen.

2. The web application that is used for testing is [saucedemo.com](https://saucedemo.com/).

3. This is the list of features that are already tested.

| **Feature Name** | **Test File** |
| ---------------- | ------------- |
| Login            | `login.js`    |
| Logout           | `logout.js`   |
| Cart             | `cart.js`     |

4. The Gherkin syntax declarations for each feature are available in `features` directory.

## How to Use

1. Clone this repository.

2. Install the dependencies.

```sh
npm install
```

3. Run the tests.

```sh
npx cypress run
```
