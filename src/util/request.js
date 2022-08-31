var contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "6zz3r2ncgjcd",
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ??
    "UxCfPGSD0XUKxnked4eErI5sMoYVIGdFdBytR52knOA",
});

export default client;
