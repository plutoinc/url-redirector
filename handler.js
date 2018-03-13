"use strict";

module.exports.redirect = (event, context, callback) => {
  console.log(event);

  const response = {
    statusCode: 301,
    headers: {
      Location: "https://search.pluto.network",
    },
    body: "https://search.pluto.network",
  };

  context.succeed(response);
};
