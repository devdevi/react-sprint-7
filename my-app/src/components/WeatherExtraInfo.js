import React from 'react';
const WeatherExtraInfo = ({humidity, wind}) => (
	<div>
			<p>{`${humidity}%h`}</p>
			<p>{`${wind}m/s`}</p>
	</div>
	)

export default WeatherExtraInfo;