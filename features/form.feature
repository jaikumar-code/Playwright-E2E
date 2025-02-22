Feature: Form Interactions
  As a user
  I want to interact with the form elements
  So that I can submit my information

  Background:
    Given I am on the test automation practice website

  Scenario: Fill and submit form with valid data
    When I fill in the name field with "John Doe"
    And I fill in the email field with "john.doe@example.com"
    And I fill in the phone field with "1234567890"
    And I fill in the address field with "Test Address"
    And I select "Male" as gender
    And I select "Monday" and "Friday" as preferred days
    And I select "Canada" from the country dropdown
    And I select "Red" and "Blue" from the colors dropdown
    Then the form should be filled with the correct data

  Scenario: Handle alert dialog
    When I click the "Alert" button
    Then I should see an alert with message "I am an alert box!"
    And I should be able to accept the alert

  Scenario: Handle confirm dialog - Accept
    When I click the "Confirm Box" button
    And I accept the confirm dialog
    Then I should see the message "You pressed OK!"

  Scenario: Handle confirm dialog - Dismiss
    When I click the "Confirm Box" button
    And I dismiss the confirm dialog
    Then I should see the message "You pressed Cancel!"