const SCREENSHOT_PATH = process.env.CIRCLE_ARTIFACTS || 'nightwatch-output/screenshots';

module.exports = {
  src_folders: [
    'tests/fixtures'
  ],
  output_folder: 'nightwatch-output/reports',
  custom_commands_path: 'tests/commands',
  page_objects_path: '',
  globals_path: 'tests/globals.js',
  selenium: {
    start_process: true,
    server_path: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.11.0.jar',
    log_path: 'nightwatch-output/logs',
    port: 9515,
    cli_args: {
      'webdriver.chrome.driver': './node_modules/chromedriver/lib/chromedriver/chromedriver'
    }
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: 9515,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        waitForConditionTimeout: 5000
      },
      screenshots: {
        enabled: true,
        path: SCREENSHOT_PATH,
        on_failure: true,
        on_error: false
      },
      desiredCapabilities: {
        browserName: 'chrome',
        marionette: true,
        chromeOptions: {
          args: [
            '--no-sandbox',
            'incognito',
            'disable-extensions'
          ]
        }
      }
    }
  }
};
