Feature: Boyner
	Scenario: Boyner
		Given Boyner sitesine git
        When erkek menusune bas
        Then Erkek penceresinde oldugunu dogrula
        And arama kutusuna ceket yaz
        And onerilen siralamayi fiyat dusukten yuksege yap
        Then fiyatin dusukten yuksege oldugunu dogrula

