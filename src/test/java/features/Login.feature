Feature: Login Feature Scenario

  # is a comment
  # background used for common steps "Login" and only tied to this feature file
  # before is applicable to all feature files
  Background: 
    Given I have launched the application
    And I click on the login link

  Scenario: This scenario is to define the login happy path
    When I enter the correct username and password
    And I click on the login button
    Then I should land on the home page
	
	@sanity
  Scenario: This scenario is to define the failure path
    When I enter the incorrect username and password
    And I click on the login button
    Then I should get the error message "The email or password you have entered is invalid."
	@regression
  Scenario: This scenario is to define the failure path
    When I enter the username as "abc@xyz.com" and password as "Password1"
    And I click on the login button
    Then I should get the error message "The email or password you have entered is invalid."

  Scenario Outline: This scenario is to define the failure path
    # this will run for each data row
    When I enter the username as "<UserName>" and password as "<Password>"
    And I click on the login button
    Then I should get the error message "The email or password you have entered is invalid."

    Examples: 
      | UserName    | Password     |
      | abc@xyz.com | Password1    |
      | pbr@xyz.com | pbrPassword1 |
