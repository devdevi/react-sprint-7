// este archivo no lleva import react  por que son servicios no llevan import react

import {
		CLOUDY,
		SUN,
		CLOUD,
		RAIN, 
		SNOW,
		WINDY,
		THUNDER,
		DRIZZLE
} from './../constant/weathers';


/*treamos lo servicios de weatherLocation*/
const getWeatherState = (weather) =>{
	return SUN;

}
// esta funcion crea la data,
const transformWeather = (weather_data) =>{
	//enlazado al icono del tiempo
	const weatherState = getWeatherState(this.weather)
	const {humidity, temp } = weather_data.main;
	const {speed} = weather_data.wind;

	const data ={
		humidity,
		temperature: temp,
		weatherState,
		wind: `${speed} m/s`,

	}
	return data;
}
// siempre importamos nuestra funciona matiene el mismo nombre del archivo
export default transformWeather ;