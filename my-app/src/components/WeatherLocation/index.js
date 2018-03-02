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

const data1 = {
	temperature:20,
	weatherState: SUN,
	humidity: 10,
	wind: 10,
}
const data = {
	temperature:30,
	weatherState: WINDY,
	humidity: 80,
	wind: 200,
}
class WeatherLocation extends Component{
	constructor (){
		super();
		this.state = { 
			city: 'Santiago',
			data: data
		}

	}

	handleUpdateClick = () => {
		console.log('hello visaka')
		this.setState ({
			data: data1,
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