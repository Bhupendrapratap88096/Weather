const city = document.getElementById("city")
const search = document.getElementById("search")
//async function for fetching weather details
async function fetchWeather(cityName){
    let apikey = "684b48a7f50da4fa2e8a279b40555a69"
    let api =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`

    let response = await fetch(api)
    let result = await response.json()
    document.getElementById("temp").innerText = result.main.temp
    document.getElementById("max_temp").innerText = result.main.temp_max
    document.getElementById("min_temp").innerText = result.main.temp_min
    document.getElementById("humidity").innerText = result.main.humidity

}
//on click of search button (adding event listner)
search.addEventListener("click", (e) =>{
    //greab input from city input field
    let cityName = city.value

    fetchWeather(cityName)

   // ask openweatherapi to give me weather data of that city
    let apikey = "684b48a7f50da4fa2e8a279b40555a69"
    let api =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`


    fetch(api)
    .then((response) =>{
        return response.json()
    })
    .then((response)=>{
        console.log(response)
    })
    .catch((error) =>{
        console.log(error)
    })
 })












