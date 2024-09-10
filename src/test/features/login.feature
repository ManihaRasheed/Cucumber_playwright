

Feature: OpenCart user login

Scenario Outline: login a new user
    
Given user is on the login page1
When user enters1 "<email>" and "<password>"
Then user clicks on the login button1
And verifies login is successful1

Examples:
    | email                     | password  |
    | umairkhan11@gmail.com    | umair123  |
    | azeemali11@gmail.com     | azeem123  |



