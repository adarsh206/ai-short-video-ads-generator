import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://ad01e4d182fb49c557414cbd4b4bbe8e@o4511166836113408.ingest.de.sentry.io/4511166853480528",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});