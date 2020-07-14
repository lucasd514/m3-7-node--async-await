const request = require("request-promise");
const { response } = require("express");

// getDadJoke
const getJoke = () => {
  return request("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
    json: true,
  });
};

// 4.1
// getJoke().then((data) => console.log(data));
getJoke().then((response) => console.log(response));
