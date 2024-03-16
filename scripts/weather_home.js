const key =`a99c4008254a2507bc15cbf9d86d76d6`;
const url =`https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&appid=${key}&units=imperial`;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

function displayWeather(data) {
    let temp = Math.round(data.main.temp)
    currentTemp.innerHTML = `${temp}&deg;F`
    let descrpt = data.weather[0].description.toUpperCase();
    captionDesc.textContent = `${descrpt}`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    weatherIcon.setAttribute('alt', `${descrpt}`);
    weatherIcon.setAttribute('loading', 'lazy');
};

async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            console.log(data);
        }else {
            throw Error (await response.text());
        }
        }catch(error) {
            console.error(error);
        } 
}

apiFetch