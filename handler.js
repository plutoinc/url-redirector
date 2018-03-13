"use strict";

module.exports.redirect = (event, context, callback) => {
  const response = {
    status: "301",
    headers: {
      Location: "https://search.pluto.network",
    },
  };

  callback(null, response);
};
