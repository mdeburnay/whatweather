const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=96f881d85f659cba1bf05f6916a198c7&query=${latitude},${longitude}&units=m`;
  request(
    { url: url, json: true },
    (
      error,
      {
        body: {
          current: { weather_descriptions, temperature, feelslike },
        },
      } = {}
    ) => {
      if (error) {
        callback("Unable to connect to forecast services!");
      } else if (error) {
        callback("Location not found. Try another search.");
      } else {
        callback(
          undefined,
          `${weather_descriptions}. It is currently ${temperature}, and feels like ${feelslike}.`
        );
      }
    }
  );
};

module.exports = forecast;
