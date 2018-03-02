import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => (
	<div>
			<p>{`${humidity}%h`}</p>
			<p>{`${wind}wind`}</p>
	</div>
	)

WeatherExtraInfo.propTypes = {
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.number.isRequired,
}

export default WeatherExtraInfo;