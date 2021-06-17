Feature('Home screen');

Scenario('Check section', ({ I }) => {
  I.amOnPage('/')
  I.scrollTo('#button')
  I.see('Tell us which artists you like', 'h2')
});

Scenario('Check Menu Explore', ({ I }) => {
  I.amOnPage('/')
  I.click('//*[@tab-id="FEmusic_explore"]')
  I.seeInCurrentUrl('/explore')
});

Scenario('Check menu Search', ({ I }) => {
  I.click('//*[@id="icon"]')
  I.type('simsalabim')
});

Scenario('Check Menu Settings', ({ I }) => {
  I.amOnPage('/')
  I.click('//*[@id="menu-button"]')
  I.see('Get Music Premium')
  I.see('Settings')
  I.see('Terms & privacy policy')
  I.see('Help')
  I.see('Send feedback')
});

Scenario('Check next in first section', ({ I }) => {
  I.amOnPage('/')
  I.click('//*[@id="next-items-button"]')
});

