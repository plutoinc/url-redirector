"use strict";
const qs = require("qs");

module.exports.redirect = (event, context, callback) => {
  const LAMBDA_SERVICE_NAME = "pluto-redirector";
  const path = event.path;

  let requestPath;
  if (path === `/${LAMBDA_SERVICE_NAME}`) {
    requestPath = "/";
  } else {
    requestPath = path.replace(`/${LAMBDA_SERVICE_NAME}`, "");
  }

  const queryStringParameters = event.queryStringParameters;
  if (queryStringParameters) {
    requestPath = `${requestPath}${qs.stringify(queryStringParameters, { addQueryPrefix: true })}`;
  }

  const response = {
    statusCode: 301,
    headers: {
      Location: `https://scinapse.io${requestPath}`,
    },
    body: `https://scinapse.io${requestPath}`,
  };

  context.succeed(response);
};
