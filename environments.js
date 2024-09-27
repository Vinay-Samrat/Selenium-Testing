module.exports = {
  test_settings: {
    default: {},
    env1: {
      desiredCapabilities: {
        browserName: 'Firefox',
        'bstack:options': {
          browserVersion: '98.0',
          os: 'Windows',
          osVersion: '10',
          debug: true
        }
      }
    },
    env2: {
      desiredCapabilities: {
        browserName: 'Safari',
        'bstack:options': {
          browserVersion: '15.6',
          os: 'OS X',
          osVersion: 'Monterey',
          debug: true
        }
      }
    },
    env3: {
      desiredCapabilities: {
        browserName: 'Chromium',
        'bstack:options': {
          deviceOrientation: 'portrait',
          deviceName: 'iPhone 13',
          osVersion: '15',
          debug: true
        }
      }
    },
    env4: {
      desiredCapabilities: {
        browserName: 'Safari',
        'bstack:options': {
          deviceName: 'iPhone X',
          osVersion: '12',
          realMobile: true,
          debug: true
        }
      }
    },
    env5: {
      desiredCapabilities: {
        browserName: 'Safari',
        'bstack:options': {
          deviceName: 'iPhone 8',
          osVersion: '11',
          realMobile: true,
          debug: true
        }
      }
    }
  }
};