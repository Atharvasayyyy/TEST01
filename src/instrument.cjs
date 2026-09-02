const { initAutterServer } = require("@autter/runtime-node");

initAutterServer({
  apiKey: process.env.AUTTER_RUNTIME_KEY,
  endpoint: process.env.AUTTER_ENDPOINT,
  service: "test01-api",
  environment: process.env.NODE_ENV,
  release: process.env.GIT_SHA,
});


