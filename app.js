let weather = {
  apiKey: "f260ecd33d31d0de2732dd3a393b07c5",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    // console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "humidity:" + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed:" + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/? " + name + "' )"
  },
  search: function () {
    let searchBar = document.querySelector(".search-bar");
    this.fetchWeather(searchBar.value);
    searchBar.value = "";
  },
};

// implementing the search button
document.querySelector(".btn-search").addEventListener("click", function () {
  weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    weather.search();
  }
});

 weather.fetchWeather("Kwara");