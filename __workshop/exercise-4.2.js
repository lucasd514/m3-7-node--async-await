const request = require("request-promise");
const { response } = require("express");

const getTronaldDumpQuote = async () => {
  return request("https://api.tronalddump.io/random/quote", {
    headers: { accept: "object" },
  });
};

getTronaldDumpQuote().then((response) => {
  console.log(response);
});
