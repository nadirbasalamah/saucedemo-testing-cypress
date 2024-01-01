Feature: Logout
    As a user
    I can Logout
    So that I can exit from the page

    Scenario: Logout successfully
        Given I am logged in
        When I click logout button
        Then I am redirected to the login page