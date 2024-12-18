Feature: Spec
    
    Scenario: Create a quote
        When I click to add a new quote
        Then I should see a card with a text field to enter a quote
