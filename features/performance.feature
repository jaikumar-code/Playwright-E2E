Feature: Performance Testing
  As a website owner
  I want to ensure my website performs well
  So that users have a good experience

  @performance
  Scenario: Check page load performance
    Given I am on the test automation practice website
    When I measure the page load time
    Then the page should load within 3 seconds
    And the First Contentful Paint should be less than 2 seconds
    And the Time to Interactive should be less than 3.5 seconds

  @performance
  Scenario: Verify Lighthouse performance score
    Given I am on the test automation practice website
    When I run a Lighthouse performance audit
    Then the performance score should be above 80
    And the accessibility score should be above 90
    And the best practices score should be above 85