Feature: Cart
    As a user
    I can add and remove item to the Cart
    So that I can proceed to checkout

    Scenario: Add Item to the Cart
        Given I am logged in
        When I click first item
        Then I click second item
        Then The items are inserted to the cart

    Scenario: Remove Item from the Cart
        Given I am logged in
        When I click first item
        Then I remove first item
        Then I click second item
        Then I remove second item

