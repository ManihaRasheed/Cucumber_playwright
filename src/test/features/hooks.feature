Feature: OpenCart user registration and login

Scenario Outline: Register and login a new user
    
Given user is on the registration page2
When user provides2 "<firstname>", "<lastname>", "<email>", "<telephone>", "<password>"
Then user clicks on the continue button2
And verifies registration is successful2
    
Given user is on the login page2
When user enters2 "<email>" and "<password>"
Then user clicks on the login button2
And verifies login is successful2

Examples:
    | firstname | lastname | email                     | telephone  | password  |
    | Umair     | Khan     | Umair12@gmail.com    | 1234567891 | umair123  |
    | Azeem     | Ali      | Azeem12@gmail.com     | 1234567892 | azeem123  |

