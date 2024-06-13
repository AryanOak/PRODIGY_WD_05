const apiKey = Not Visible

function getWeather(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Handle weather data here
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Example usage
getWeather('London');
