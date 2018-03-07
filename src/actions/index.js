import axios from 'axios';

const API_KEY = '5234ca760b004c0ffba830eb6b0332d3';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url);

    console.log(request);
    return{
        type:FETCH_WEATHER,
        payload:request
    }
}