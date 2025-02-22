Feature: Table Interactions
  As a user
  I want to interact with the table
  So that I can verify its contents and structure

  Background:
    Given I am on the test automation practice website

  Scenario: Verify table headers and content
    Then I should see the following table headers:
      | Rank | Country | Capital |
    And the table should have more than 0 rows
    And the first row should contain rank "1"