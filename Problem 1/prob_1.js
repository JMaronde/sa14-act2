// fetch data from WeatherAPI.com, current weather and forecast for the next 4 days

fetchData();

async function fetchData(){
    try{
        const response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=da5e14a9da384504818201700240304&q=London&days=5&aqi=no&alerts=no");

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);

    }
    catch(error){
        console.error(error);
    }
}