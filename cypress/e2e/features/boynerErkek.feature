Feature: Boyner
	Scenario: Boyner
		Given Boyner sitesine git
        And arama kutusuna ceket yaz
        When erkek menusune bas
        And onerilen siralama tikla
        And onerilen siralamayi fiyat dusukten yuksege yap
        Then fiyatin dusukten yuksege oldugunu dogrula

