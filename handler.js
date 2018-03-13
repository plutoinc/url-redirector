"use strict";

module.exports.redirect = (event, context, callback) => {
  const LAMBDA_SERVICE_NAME = "pluto-redirector";
  const path = event.path;

  let requestPath;
  if (path === `/${LAMBDA_SERVICE_NAME}`) {
    requestPath = "/";
  } else {
    requestPath = path.replace(`/${LAMBDA_SERVICE_NAME}`, "");
  }

  const response = {
    statusCode: 301,
    headers: {
      Location: `https://search.pluto.network${requestPath}`,
    },
    body: `https://search.pluto.network${requestPath}`,
  };

  context.succeed(response);
};
