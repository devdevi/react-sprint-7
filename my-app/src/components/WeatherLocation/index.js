import React from 'react';
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
const data = {
	temperature:20,
	weatherState: SUN,
	humidity: 10,
	wind: 10,
}


const WeatherLocation = () => (
	<div className='weaterDataCont'>
		<Location city = {'MIAMI'}/>
       <WeatherData data ={data} />

	</div>
	)

export default WeatherLocation;