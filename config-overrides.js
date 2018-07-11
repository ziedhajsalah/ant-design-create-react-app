const { injectBabelPlugin } = require('react-app-rewired');
const rewireSass = require('react-app-rewire-scss');
const rewireLess = require('react-app-rewire-less');
const rewireEslint = require('react-app-rewire-eslint');

const themeOverrides = require('./theme');

module.exports = function override(config, env) {
  // use babel-plugin-import to import antd components
  config = injectBabelPlugin(
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }
    ],
    config
  );

  // add scss support
  config = rewireSass(config, env);

  // add less support to antd
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    // override less variables to customize the theme
    modifyVars: themeOverrides
  })(config, env);

  // override eslint config
  config = rewireEslint(config, env);

  return config;
};
