const input = document.querySelector('.input')
const btn = document.querySelector('button')
const ApiKey = 'b92cc665560faa12c076ce7a961bf915'
const ApiURL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'

btn.addEventListener('click', () =>{
    const city = input.value
    input.value = ''
    document.querySelector('.all').style.display = 'block';
const fetcher = async () => {
    const  response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`)
    const data = await response.json()
    console.log(data)
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humd').innerHTML = data.main.humidity + '%';
    document.querySelector('.speed').innerHTML = data.wind.speed + 'km/hr';
    const image = document.querySelector('#image')

    if(data.weather[0].main === 'Rain' ){
        image.src = `images/rain.png`
    } else if(data.weather[0].main === 'Clear' ){
        image.src = `images/clear.png`
    } else if(data.weather[0].main === 'Mist' ){
        image.src = `images/mist.png`
    } else if(data.weather[0].main === 'Drizzle' ){
        image.src = `images/drizzle.png`
    } else if(data.weather[0].main === 'Snow' ){
        image.src = `images/snow.png`
    } else if(data.weather[0].main === 'Clouds' ){
        image.src = `images/clouds.png`
    }

}

fetcher();
})



