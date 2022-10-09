Feature: This feature would be creating a calculator for Add and Subtract

  @sanity @wip
  Scenario: To Add two numbers
    Given I have a calculator
    When I add 4 and 5
    Then I should get the result as 9

  @wip
  Scenario Outline: To Add two numbers
    Given I have a calculator
    When I add <int1> and <int2>
    Then I should get the result as <result>

    Examples: 
      | int1 | int2 | result |
      |    3 |    3 |      6 |
      |    3 |    4 |      7 |
      |    3 |    5 |      8 |

  @sanity @wip1
  Scenario: To Add two numbers
    Given I have a calculator
    When I add below numbers
      | 3 |
      | 2 |
      | 5 |
      | 4 |
      | 3 |
    Then I should get the result as 17
