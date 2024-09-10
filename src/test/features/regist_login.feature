Feature: login page validation

Scenario: login with valid username and password
Given provide valid url
When provide valid username and password
Then click on login button
And varify login is success

Scenario: getting registration account 
Given I am on the registration page
When I provide valid registration details
Then I click on the continue button
And I verify registration is successful

Scenario: login my account
Given I am on the login page
When I enter valid username and password
Then I click on the login button
And I verify login is successful

