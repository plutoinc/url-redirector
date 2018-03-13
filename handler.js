"use strict";

module.exports.redirect = (event, context, callback) => {
  const response = {
    statusCode: 301,
    headers: {
      Location: "https://search.pluto.network",
    },
    body: "https://search.pluto.network",
  };

  context.succeed(response);
};
