import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';

import {
		CLOUDY,
		SUN,
		CLOUD,
		RAIN, 
		SNOW,
		WINDY,
} from './../../constant/weathers';


const data1 = {
	temperature:30,
	weatherState: WINDY,
	humidity: 80,
	wind: '20.0 m/s',
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
			data: data1,
		}
		console.log('constructor') 

	}

	handleUpdateClick = () => {
		// console.log('hello visaka')
		// this.setState ({
		// 	data: data1,
		// })
		fetch(api_weather).then( data =>{
			console.log(data)
			return data.json();
		}).then(weather_data =>{
			const data = transformWeather(weather_data)
			this.setState ({ data })
			
			 
		})
	
	}

/*	CICLOS DE VIDA IMPORTANTESS!!!!*/
	// se ejecuta antes del reder
	componentWillMount(){
		console.log('componentWillMount ESTO VA A TENER LA INFORMACION  ANTES DEL RENDER')




	}

	
// SE EJECUTA AL FINAL DEL RENDER
		componentDidMount(){
		console.log('componentDidMount se ejecuta despues del render')
	}



// se ejecuta despues del renderizado por segunda vez
	componentWillUpdate(nextProps, nextState){
		console.log('componentWillUpdate')
	}
//Esta última parte de la actualización de un componente ocurre justo después de que se renderiza en el DOM nuestro componente.
	componentDidUpdate(prevProps, prevState){
		console.log('ComponentDidUpdate')
	}

	render = () => {
		  console.log('render')
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