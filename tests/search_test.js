Feature('Search menu')

Scenario('Check menu Search', ({ I }) => {
  I.amOnPage('/')
  I.click('//*[@id="icon"]')
  I.type('simsalabim')
  I.pressKey('Enter')
  I.seeInCurrentUrl('/search?q=simsalabim')
  I.see('Top result')
  I.see('Songs')
  I.see('Videos')
  I.see('Albums')
  I.see('Community playlists')
  I.see('Artists')
});