const env = process.env.ENV || process.env.NODE_ENV || "development";

const commonConfigs = {
  // sentryDns
  env
};

const configs = Object.assign(
  commonConfigs,
  {
    development: {
      urlBase: ""
      // urlBase: 'http://localhost:8000/'
    },
    staging: {
      urlBase: ""
    },
    production: {
      urlBase: ""
    }
  }[env]
);

export default configs;
