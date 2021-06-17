Feature('Settings Menu')

Scenario('Check settings - Get Music Premium', ({ I }) => {
  I.amOnPage('/')
  I.click('//*[@id="menu-button"]')
  I.click('Get Music Premium')
  I.seeInCurrentUrl('/music_premium')
});

Scenario('Check settings - Setting', ({ I }) => {
  I.amOnPage('/')
  I.click('//*[@id="menu-button"]')
  I.click('Settings')
  I.seeElement('.ytmusic-dialog')
});

Scenario('Check settings - Terms & privacy', ({ I }) => {
  I.amOnPage('/')
  I.click('//*[@id="menu-button"]')
  I.click('Terms & privacy policy')
  I.seeInCurrentUrl('https://www.youtube.com/t/terms?gl=ID&chromeless=1')
  I.see('Terms of Service', 'h1')
});

Scenario('Check settings - Help', ({ I }) => {
  I.amOnPage('/')
  I.click('//*[@id="menu-button"]')
  I.click('Help')
});

Scenario('Check settings - Send feedback', ({ I }) => {
  I.amOnPage('/')
  I.click('//*[@id="menu-button"]')
  I.click('Send feedback')
  });

