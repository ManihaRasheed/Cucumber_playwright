

Feature: OpenCart user registration and login

Scenario Outline: Register and login a new user
    
Given user is on the registration page
When user provides "<firstname>", "<lastname>", "<email>", "<telephone>", "<password>"
Then user clicks on the continue button
And verifies registration is successful
    
Given user is on the login page
When user enters "<email>" and "<password>"
Then user clicks on the login button
And verifies login is successful

Examples:
    | firstname | lastname | email                     | telephone  | password  |
    | Umair     | Khan     | umair1234567891011@gmail.com    | 1234567891 | umair123  |
    | Azeem     | Ali      | azeem1234567891011@gmail.com     | 1234567892 | azeem123  |

