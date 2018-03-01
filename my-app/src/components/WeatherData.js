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
} from './../constant/weathers';

const WeatherData = () => (
	<div>
	    <WeatherTemperature temperature={34} weatherState={WINDY}/>
		<WeatherExtraInfo  humidity={80} wind={'10'} />
	</div>
	)

export default WeatherData;