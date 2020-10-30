const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./components/geocode.js");
const forecast = require("./components/forecast.js");

const app = express();

const port = process.env.PORT || 3000;

const frontendPath = path.join(__dirname, "../frontend");
const viewsPath = path.join(__dirname, "../frontend/templates/views");
const partialsPath = path.join(__dirname, "../frontend/templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(frontendPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "WhatWeather",
    name: "Max De Burnay",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About WhatWeather",
    name: "Max De Burnay",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    helpText: "If you would like further help, contact me via email!",
    name: "Max De Burnay",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Please search for an address.",
    });
  }
  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }
        res.send({
          address: req.query.address,
          forecast: forecastData,
          location,
        });
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must enter a search query!",
    });
  }
  console.log(req.query);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("helpArticle", {
    title: "Help Article",
    helpText: "Help article not found",
    name: "Max De Burnay",
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    title: "Error 404",
    errorText: "Page not found!",
    name: "Max De Burnay",
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
