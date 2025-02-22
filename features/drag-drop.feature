Feature: Drag and Drop
  As a user
  I want to drag and drop elements
  So that I can verify the functionality works

  Background:
    Given I am on the test automation practice website

  Scenario: Perform drag and drop operation
    When I drag the source element to the target element
    Then the target element should display "Dropped!"