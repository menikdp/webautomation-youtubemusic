Feature('Explore screen');

Scenario('Check section in explore screen', ({ I }) => {
  I.amOnPage('/explore')
  I.see('New albums & singles')
  I.see('Moods & genres')
  I.see('New music videos')
});

Scenario('Check submenu new releases', ({ I }) => {
  I.amOnPage('/explore')
  I.see("New releases")
  I.click('New releases')
  I.seeInCurrentUrl('/new_releases')
  I.see('New releases', 'h2')
  I.see('Albums & singles', 'h2')
  I.see('Music videos', 'h2')
});

Scenario('Check submenu charts', ({ I }) => {
  I.amOnPage('/explore')
  I.see("Charts")
  I.click('Charts')
  I.seeInCurrentUrl('/charts')
  I.see('Charts', 'h2')
  I.see('Top music videos', 'h2')
  I.see('Top artists', 'h2')
});

Scenario('Check carts based on country', ({ I }) => {
  I.amOnPage('/charts')
  I.see("Charts")
  I.click('//*[@id="button"]')
  I.click('Finland')
});

Scenario('Check submenu moods & genres', ({ I }) => {
  I.amOnPage('/explore')
  I.see("Moods & genres")
  I.click('Moods & genres')
  I.seeInCurrentUrl('/moods_and_genres')
  I.see('Moods & genres', 'h2')
  I.see('Moods & moments')
  I.see('Genres')
});