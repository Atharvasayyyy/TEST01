const { initAutterServer } = require("@autter/runtime-node");

const runtimeKey = process.env.AUTTER_RUNTIME_KEY;

if (!runtimeKey || runtimeKey === "REPLACE_WITH_VALID_AUTTER_RUNTIME_KEY") {
  console.warn("[autter] AUTTER_RUNTIME_KEY is not configured. Runtime initialization skipped.");
  module.exports = null;
} else {
  const autter = initAutterServer({
    apiKey: runtimeKey,
    endpoint: process.env.AUTTER_ENDPOINT || "https://otlp.autter.dev",
    service: "test01-api",
    environment: "runtime-test",
    release: "runtime-test-001",
    captureGlobalErrors: true,
    autoFlush: true,
    debug: process.env.AUTTER_DEBUG === "1",
  });

  module.exports = autter;
}
