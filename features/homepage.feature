Feature: Random
  A random feature using some Playwright stuff
Scenario: open and do a search in google
  Given I go to google
  When I search some value
  Then I expect to see the searching list