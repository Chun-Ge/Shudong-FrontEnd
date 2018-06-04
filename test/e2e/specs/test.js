// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      // .setValue('input[type=text]', 'liangtjsky@mail.sysu.edu.cn')
      // .setValue('input[type=password]', '1234567')
      // .click('button')
      // .pause(3000)
      .assert.elementPresent('input[type=password]')
      // .assert.elementPresent('.login')
      // .assert.containsText('h1', 'Welcome to Your Vue.js App')
      // .assert.elementCount('img', 1)
      .end();
  },
};
