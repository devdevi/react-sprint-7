import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {
		CLOUDY,
		SUN,
		CLOUD,
		RAIN, 
		SNOW,
		WINDY,
} from './../../../constant/weathers';

import  './style.css';


const WeatherData = () => (
	<div className='weaterDataCont'>
	    <WeatherTemperature temperature={34} weatherState={WINDY}/>
		<WeatherExtraInfo  humidity={80} wind={'10'} />
	</div>
	)

export default WeatherData;