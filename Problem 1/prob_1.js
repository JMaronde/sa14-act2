// fetch data from WeatherAPI.com, current weather and forecast for the next 4 days

const button = document.getElementsByTagName("button")[0]
button.addEventListener("click", async function fetchData(event) {
    event.preventDefault();

    try{
        const api_key = "da5e14a9da384504818201700240304"
        const city_name = document.getElementById("cityInput").value;
        const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city_name}&days=5`).then((response) => response.json());
        
        var days = document.querySelectorAll('.day'); // gets each day div

        for (var i = 0; i < days.length; i++) { // iterate through each of them

            const date = data.forecast.forecastday[i].date; // grab the needed weather info from the API
            const icon = data.forecast.forecastday[i].day.condition.icon;
            const max_temp = data.forecast.forecastday[i].day.maxtemp_f;
            const min_temp = data.forecast.forecastday[i].day.mintemp_f;
            const humidity = data.forecast.forecastday[i].day.avghumidity;

            var day = days[i];
            
            day.innerHTML = ` 
            <h2> ${date}</h2>
            <img src="https:${icon}">
            <p> Max Temp: ${max_temp} degrees F</p>
            <p> Min Temp: ${min_temp} degrees F</p>
            <p> Humidity: ${humidity}%</p>           
            `
        }
    }
    catch(error) {
        console.log("Error fetching data: ", error);
        console.log(error.status);
    }
} )