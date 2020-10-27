const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoibWF4aW1vb3NlIiwiYSI6ImNrZ2U0YnBtbzEzcHEyeXFhZXhnZGZ6ZWUifQ.0r5X682UgCLXIUfzUPMj8w&limit=1`;

  request({ url: url, json: true }, (error, { body: { features } } = {}) => {
    if (error) {
      callback("Unable to connect to location services!");
    } else if (features.length === 0) {
      callback("Location not found. Try another search.");
    } else {
      callback(undefined, {
        latitude: features[0].center[1],
        longitude: features[0].center[0],
        location: features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
