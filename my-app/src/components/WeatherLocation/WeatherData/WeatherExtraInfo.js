import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => (
	<div>
			<span> {`Humedad:${humidity}%h`}</span>
			<span> {`Viento: ${wind}`}</span>
	</div>
	)



export default WeatherExtraInfo;