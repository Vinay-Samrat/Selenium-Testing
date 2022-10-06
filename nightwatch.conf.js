const additonalEnvironments = require("./environments");

if(!additonalEnvironments.test_settings)
  additonalEnvironments.test_settings = {};

const bstackOptions = {
  'bstack:options' : {
      "os" : "OS X",
      "osVersion" : "Sierra",
      "buildName" : "browserstack-build-1",
      "sessionName" : "Selenium-4 Nodejs snippet test",
      "source": "nightwatch:sample-master:v1.0",
      "local" : "false",
      "seleniumVersion" : "4.0.0",
      userName: '${BROWSERSTACK_USERNAME}',
      accessKey: '${BROWSERSTACK_ACCESS_KEY}',
  },
}

const browserStack = {
  webdriver: {
      start_process: false
    },

    selenium: {
      host: 'hub.browserstack.com',
      port: 443
    },

    desiredCapabilities: {
       browserName: 'chrome',
      ...bstackOptions
    }
}

const nightwatchConfigs = {
  src_folders: [],

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },

    browserstack:  {
        ...browserStack
    },

    "browserstack.chrome": {
      ...browserStack,
      desiredCapabilities:{
          browserName: 'chrome',
          ...bstackOptions
      }
    },
    "browserstack.firefox": {
      ...browserStack,
      desiredCapabilities:{
          browserName: 'firefox',
          ...bstackOptions
      }
    },
    "browserstack.edge": {
      ...browserStack,
      desiredCapabilities:{
          browserName: 'Edge',
          ...bstackOptions
      }
    },
    // capabilities to run local test on BrowserStack
    'browserstack.local': {
      ...browserStack,
      desiredCapabilities: {
       browserName: 'chrome',
        'bstack:options' : {
            "os" : "OS X",
            "osVersion" : "Sierra",
            "buildName" : "browserstack-build-1",
            "sessionName" : "Selenium-4 Nodejs snippet test",
            "source": "nightwatch:sample-master:v1.0",
            "local" : "true",
            "seleniumVersion" : "4.0.0",
            userName: '${BROWSERSTACK_USER}',
            accessKey: '${BROWSERSTACK_KEY}',
        },
      },
    }
  }
}

for(let key in additonalEnvironments.test_settings) {
  nightwatchConfigs.test_settings[key] = {
    ...browserStack,
    ...additonalEnvironments.test_settings[key]
  };
}

module.exports = nightwatchConfigs;
