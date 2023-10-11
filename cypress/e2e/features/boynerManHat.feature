Feature: Hat
Scenario: Select Hat
	Given Go to Boyner
    When click login button
    And enter email
    And enter password
    And click to login
    Then verify login
    And Click the Man menu
    And Select the Hat link
    And Select the Puma mark Hat
    And Add to cart
    And go to cart
    Then verify added
