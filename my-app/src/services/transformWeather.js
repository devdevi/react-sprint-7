// este archivo no lleva import react  por que son servicios no llevan import react

import {
		CLOUDY,
		SUN,
		CLOUD,
		RAIN, 
		SNOW,
		WINDY,
} from './../constant/weathers';


/*treamos lo servicios de weatherLocation*/
	getWeatherState = (weather) =>{
		return SUN;

	}
	// esta funcion crea la data,
	getData = (weather_data) =>{
		//enlazado al icono del tiempo
		const weatherState = this.getWeatherState(this.weather)
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