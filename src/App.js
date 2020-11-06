const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

window.onload = function () {
  weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = search.value;
    messageOne.textContent = "Loading...";
    messageTwo.textContent = "";
    fetch(`/weather?address=${location}`).then((response) => {
      response.json().then(({ location, forecast, error }) => {
        if (error) {
          messageOne.textContent = error;
        } else if (!location) {
          messageOne.textContent = "Please enter a location.";
          messageTwo.textContent = "";
        } else {
          messageOne.textContent = location;
          messageTwo.textContent = forecast;
        }
      });
    });
  });
};
