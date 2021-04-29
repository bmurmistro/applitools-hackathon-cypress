module.exports = {
    showLogs: false,
    concurrency: 10,
    //set your API Key here!
    apiKey: '',
    //
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
    // set batch name to the configuration
    batchName: '[Team Name] Cypress Batch'
  }

     