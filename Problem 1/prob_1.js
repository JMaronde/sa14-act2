// fetch data from WeatherAPI.com, current weather and forecast for the next 4 days

const button = document.getElementsByTagName("button")[0]
button.addEventListener("click", async function fetchData() {
    try{
        const api_key = "da5e14a9da384504818201700240304"
        const city_name = document.getElementById("cityInput").value;
        const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city_name}&days=5`).then((response) => response.json())

        console.log(data);

    }
    catch(error) {
        console.log("Error fetching data: ", error);
        console.log(error.status);
    }
} )
