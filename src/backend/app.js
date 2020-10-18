const geocode = require("./components/geocode.js");
const forecast = require("./components/forecast.js");

forecast(37.8395, -122.2433, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

geocode("Nottingham", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
