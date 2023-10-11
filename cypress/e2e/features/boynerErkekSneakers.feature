Feature: Boyner
Background: Login
	Given Go to Boyner
        And Click on user icon
        And enter email address
        And enter password
        And Click on Giriş Yap Button

        
        Scenario: Boyner
        When erkek menusune tikla
        And sneakers sec
        And marka nike sec
        Then urunlerde nike oldugunu dogrula