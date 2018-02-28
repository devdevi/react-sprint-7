import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = () => (
	<div>
	    <WeatherTemperature temperature={26}/>
		<WeatherExtraInfo  humidity={80} wind={'10'} />
	</div>
	)

export default WeatherData;