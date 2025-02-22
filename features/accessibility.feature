Feature: Accessibility Testing
  As a website owner
  I want to ensure my website is accessible
  So that all users can use it effectively

  @accessibility
  Scenario: Check accessibility standards compliance
    Given I am on the test automation practice website
    When I analyze the page for accessibility issues
    Then there should be no critical accessibility violations
    And there should be no serious accessibility violations

  @accessibility
  Scenario: Verify form field accessibility
    Given I am on the test automation practice website
    When I check form fields accessibility
    Then all form fields should have proper labels
    And all form fields should have ARIA attributes where necessary