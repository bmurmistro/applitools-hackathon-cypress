module.exports = {
    showLogs: false,
    testConcurrency: 10,
    apiKey: process.env.APPLITOOLS_API_KEY || 'your APPLITOOLS_API_KEY',
    batchName: '[Team Name] Cypress Batch',
    appName: '[Team Name] Cypress App',
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
        {width: 1200, height: 800, name: 'firefox'},
        {width: 1600, height: 1200, name: 'ie11'},
        {width: 1024, height: 768, name: 'edgechromium'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'Pixel 2', screenOrientation: 'portrait'}
     ],
  }

     