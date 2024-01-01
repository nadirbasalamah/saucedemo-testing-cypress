Feature: Login
    As a user
    I can Login
    So that I can see products page

    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter valid username
        Then I enter valid password
        Then I click login button
        Then I am on the products page

    Scenario: Login with invalid credentials
        Given I am on the login page
        When I enter invalid username
        Then I enter invalid password
        Then I click login button
        Then I get error message

    Scenario: Login with locked out user
        Given I am on the login page
        When I enter locked username
        Then I enter valid password
        Then I click login button
        Then I get error message the user is locked out