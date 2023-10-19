Feature: Hat
Background: Login Boyner
Given Go to Boyner
    When click login button
    And enter email
    And enter password
    And click to login
    Then verify login

Scenario: Select Hat
	And Click the Man menu
    And Select the Hat link
    And Select the Puma mark Hat
    And Add to cart
    And go to cart
    Then verify added

Scenario: Verify Hat
Given send "çanta" to searchbox
And select man to the sex menu
Then verify "çanta" or "bag" in to the result