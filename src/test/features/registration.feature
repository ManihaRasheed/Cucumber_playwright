

Feature: OpenCart user registration

Scenario Outline: Register a new user
    
Given user is on the registration page3
When user provides3 "<firstname>", "<lastname>", "<email>", "<telephone>", "<password>"
Then user clicks on the continue button3
And verifies registration is successful3
    
Examples:
    | firstname | lastname | email                     | telephone  | password  |
    | Umair     | Khan     | alia1234567@gmail.com    | 1234567891 | umair123  |
    | Azeem     | Ali      | tania1234567@gmail.com     | 1234567892 | azeem123  |


