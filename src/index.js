/*let current = document.querySelector("#day");

let today = new Date();
let currentDate = today.getDate();
let hour = today.getHours();
let minutes = today.getMinutes();
let sec = today.getSeconds();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

current.innerHTML = `${days}, ${currentDate}, ${hour} : ${minutes}: ${sec}`;
return current;

//Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.
function rplace(event) {
  let find = document.querySelector("#replace");
  find.innerHTML = function SearchBar(event) {
    event.preventDefault();
    let searchCity = document.querySelector("#search");
    console.log(searchCity.value);
  };
  let tnk = document.querySelector("#replace");
  tnk.addEventListener("click", rplace);
}
rplace();*/

//In your project, when a user searches for a city (example: New York), it should display the name of the city on the result page and the current temperature of the city.
let exactDate = document.querySelector("#preciseDate");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let mins = ("0" + minutes).slice(-2);
exactDate.innerHTML = `${day} ${hours}:${mins}`;

function showWeatherDeatils(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector(".temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "889c7f3ed9dacba9e272eab879e0a867";
  let city = document.querySelector("#city-input").value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeatherDeatils);
}

let form = document.querySelector(".search-form"); //becuz u can enter search engine or click on search button
form.addEventListener("submit", search);

function retrievePosition(position) {
  let apiKey = "889c7f3ed9dacba9e272eab879e0a867";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeatherDeatils);
}

function checkLocation() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}
let button = document.querySelector("button");
button.addEventListener("click", checkLocation);

function convertToCelsius(event) {
  event.preventDefault;
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = Math.round(
    (temperatureElement.innerHTML - 32) * (5 / 9)
  );
}
let celsiusLink = document.querySelector("#celsiusLink");
celsiusLink.addEventListener("click", convertToCelsius);

function convertToFahrenheit(event) {
  event.preventDefault;
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = Math.round(
    temperatureElement.innerHTML * (9 / 5) + 32
  );
}
let fahrenheitLink = document.querySelector("#fahrenheitLink");
fahrenheitLink.addEventListener("click", convertToFahrenheit);
