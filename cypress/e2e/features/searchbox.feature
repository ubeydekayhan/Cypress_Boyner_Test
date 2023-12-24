Feature: Search Test
Scenario Outline: TC01_SearchBox

Given go to url
Then To be searched "<text>"
And Click to Ara_Button
And Verify the search result "<text>"

Examples:
    | text| 
    | Ayakkabı  |
    | Saat  |
    | Çanta  |
    | Kemer  |
   



