const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=96f881d85f659cba1bf05f6916a198c7&query=37.8569,-122.6584&units=m";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
    console.log(chunk);
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("Error!", error);
});

request.end();
