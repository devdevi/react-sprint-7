import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import {
		CLOUDY,
		SUN,
		CLOUD,
		RAIN, 
		SNOW,
		WINDY,
} from './../../constant/weathers';

const data2 = {
	temperature:20,
	weatherState: SUN,
	humidity: 10,
	wind: '10 m/s',
}
const data1 = {
	temperature:30,
	weatherState: WINDY,
	humidity: 80,
	wind: 200,
}
const api_key = '7ef9343f1692462eecbd9335a6bf3727';
const location = 'santiago,scl';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`

// el constructor renderisa y llama la Api
class WeatherLocation extends Component{
	constructor (){
		super();
		this.state = { 
			city: 'Santiago',
			data: data2,
		}

	}
	// getWeatherState = (weather) =>{
	// 	return SUN;

	// }
	// // esta funcion crea la data,
	// getData = (weather_data) =>{
	// 	//enlazado al icono del tiempo
	// 	const weatherState = this.getWeatherState(this.weather)
	// 	const {humidity, temp } = weather_data.main;
	// 	const {speed} = weather_data.wind;

	// 	const data ={
	// 		humidity,
	// 		temperature: temp,
	// 		weatherState,
	// 		wind: `${speed} m/s`,

	// 	}
	// 	return data;
	// }
	handleUpdateClick = () => {
		// console.log('hello visaka')
		// this.setState ({
		// 	data: data1,
		// })
		fetch(api_weather).then( data =>{
			console.log(data)
			return data.json();
		}).then(weather_data =>{
			const data = this.getData(weather_data)
			this.setState ({ data })
			
			 
		})
	
	}
	render = () => {
		const {city, data} = this.state;
    return (
     <div className='weaterDataCont'>
		<Location city = {city}/>
       <WeatherData data = {data} />
       <button onClick = {this.handleUpdateClick}>Actualizar</button>
	</div>
    );
  }

}



// const WeatherLocation = () => (
// 	<div className='weaterDataCont'>
// 		<Location city = {'MIAMI'}/>
//        <WeatherData data ={data} />

// 	</div>
// 	)

export default WeatherLocation;