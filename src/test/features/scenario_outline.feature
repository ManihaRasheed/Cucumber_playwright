Feature: OpenCart user registration and login

Scenario Outline: Register and login a new user
    
Given user is on the registration page4
When user provides4 "<firstname>", "<lastname>", "<email>", "<telephone>", "<password>"
Then user clicks on the continue button4
And verifies registration is successful4
    
Given user is on the login page4
When user enters4 "<email>" and "<password>"
Then user clicks on the login button4
And verifies login is successful4

Examples:
    | firstname | lastname | email                     | telephone  | password  |
    | Umair     | Khan     | khan1234@gmail.com    | 1234567891 | umair123  |
    | Azeem     | Ali      | kanita1234@gmail.com     | 1234567892 | azeem123  |

