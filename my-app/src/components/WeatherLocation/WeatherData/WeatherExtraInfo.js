import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => (
	<div>
			<p>{`${humidity}%h`}</p>
			<p>{`${wind}wind`}</p>
	</div>
	)



export default WeatherExtraInfo;