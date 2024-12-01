const API = process.env.REACT_APP_API_KEY;

const getCityWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
    return(
        fetch(url)
        .then((response)=>response.json())
        .then((data)=> {
            if(data)
            return(
                    {
                        city: city,
                        weatherData: data
                    }
                )
        })
        .catch((error)=>{
            console.error('error', error)
        })
    )
}

const getCityFutureWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}&units=metric`
    return(
        fetch(url)
        .then((response)=>response.json())
        .then((data)=> {
            if(data)
            return(
                    {
                        city: city,
                        weatherData: data
                    }
                )
        })
        .catch((error)=>{
            console.error('error', error)
        })
    )
} //미래날씨 받아오는 api

export { getCityWeather, getCityFutureWeather }