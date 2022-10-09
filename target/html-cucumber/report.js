$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Calculator.feature");
formatter.feature({
  "name": "This feature would be creating a calculator for Add and Subtract",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To Add two numbers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CalculatorStepDef.i_have_a_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add 4 and 5",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.CalculatorStepDef.i_add_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 9",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CalculatorStepDef.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Add two numbers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    },
    {
      "name": "@wip1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CalculatorStepDef.i_have_a_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add below numbers",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.CalculatorStepDef.i_add_below_numbers(java.util.List\u003cjava.lang.Integer\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 17",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CalculatorStepDef.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature Scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to define the failure path",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the incorrect username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_the_incorrect_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});