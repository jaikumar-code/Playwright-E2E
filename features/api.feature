Feature: API Testing
  As a developer
  I want to test the API endpoints
  So that I can ensure data integrity

  @api
  Scenario: Verify API response format
    Given I make a GET request to "/posts"
    Then the response status code should be 200
    And the response should be in JSON format
    And each post should have required fields:
      | field   |
      | id      |
      | title   |
      | content |

  @api
  Scenario: Create new post
    Given I have the following post data:
      | title          | content               |
      | Test Post      | This is a test post   |
    When I make a POST request to "/posts"
    Then the response status code should be 201
    And the response should contain the created post