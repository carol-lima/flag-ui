const env = process.env.ENV || "development";

const configs = {
  development: {
    urlBase: "http://localhost:3000/",
  },
  staging: {
    urlBase: "ex-test.com",
  },
  production: {
    urlBase: "ex-production.com",
  },
}[env];

export default configs;
