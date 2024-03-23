const key = 'a99c4008254a2507bc15cbf9d86d76d6';
const currentWeatherurl=`https://api.openweathermap.org/data/2.5/weather?lat=35.60&lon=140.16&appid=${key}&units=imperial`;
const forecasturl =`https://api.openweathermap.org/data/2.5/forecast?lat=35.60&lon=140.16&appid=${key}&units=imperial`;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


function displayCurrentWeather(data) {
    let temp = Math.round(data.main.temp);
    currentTemp.innerHTML = `${temp}&deg;F`;
    let descrpt = data.weather[0].description.toUpperCase();
    captionDesc.textContent = `${descrpt}`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', `${descrpt}`);
    weatherIcon.setAttribute('loading', 'lazy');
    
    // // Add this line to display the weather description
    // document.getElementById('weather-description').textContent = descrpt;
}
function displayThreeDayForecast(data) {
    const div = document.querySelector(".forecast");
    div.innerHTML = "";
  
    const filteredData = data.list.filter(item => item.dt_txt.includes("21:00:00")).slice(0, 4);
  
    filteredData.forEach(dayData => {
      const date = new Date(dayData.dt_txt);
      const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });
  
      let temp = Math.round(dayData.main.temp);
      div.innerHTML += `
          <div class="card">
              <h4 class="card-header">${dayOfWeek}</h4>
              <section class="card-body">
                  <img src="https://openweathermap.org/img/wn/${dayData.weather[0].icon}.png" alt="${dayData.weather[0].description}" loading="lazy">
                  <p>${temp}&deg;F with ${dayData.weather[0].description}.</p>
              </section>
          </div>
      `;
  });
  }

async function apiFetch() {
    try {
        const [response, threeDay] = await Promise.all([fetch(currentWeatherurl), fetch(forecasturl)]);
        if (response.ok && threeDay.ok) {
            const data = await response.json();
            const threeDayData = await threeDay.json();
            console.log(threeDayData);
            console.log(data);
            displayCurrentWeather(data);
            displayThreeDayForecast(threeDayData)
            
            
             
        } else {
            throw Error (await response.text());
        }
      } catch (error) {
        // console.error(error); 
      }
}

apiFetch();
        

// Function to update weather information
function updateWeather() {
    // Fetch temperature and wind speed values from the DOM
    var currentTemperature = parseFloat(document.getElementById("temperature").textContent);
    var currentWindSpeed = parseFloat(document.getElementById("windspeed").textContent);

    // Calculate wind chill
    var windChill = calculateWindChill(currentTemperature, currentWindSpeed);

    // Display current temperature and wind chill
    document.getElementById("current-temp").textContent = "Current Temp: " + currentTemperature + "°F";
    document.getElementById("windchill").textContent = (windChill !== "N/A") ? windChill + "°F" : "N/A";
}

// Call updateWeather function when the page loads
window.onload = function () {
    updateWeather();
};