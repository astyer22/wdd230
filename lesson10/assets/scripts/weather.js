const key = 'a99c4008254a2507bc15cbf9d86d76d6';
const url=`https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=${key}&units=imperial`;

const currentTemp = document.querySelector('#forecast-temp');
const weatherIcon = document.querySelector('#forecast-icon');
const captionDesc = document.querySelector('figcaption');


function displayResults(data) {
    for (let i = 0; i < 3; i++) {
        const dayData = data.list[i];
        const dayIndex = i + 1;
        const tempElement = document.getElementById(`temp${dayIndex}`);
        const iconElement = document.getElementById(`icon${dayIndex}`);
        const descElement = document.getElementById(`desc${dayIndex}`);

        if (dayData) {
            let temp = Math.round(dayData.main.temp);
            let descrpt = dayData.weather[0].description.toUpperCase();

            tempElement.textContent = `${temp}&deg;F`;
            iconElement.setAttribute('src', `https://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`);
            iconElement.setAttribute('alt', `${descrpt}`);
            iconElement.setAttribute('loading', 'lazy');
            descElement.textContent = descrpt;
        }
    }
}


async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            console.log(data); 
        } else {
            throw Error (await response.text());
        }
      } catch (error) {
        console.error(error); 
      }
}

apiFetch();
        