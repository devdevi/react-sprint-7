import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';


// const data = {temperature:10, weatherState:'rain', humidity: 10, wind:'nomal'}  	// console.log(data)

const ForecastItem = ({weekDay, hour, data}) => (
	<div className="visaka">
	<div>{weekDay} - {hour} hr </div>
	<WeatherData data={data}></WeatherData>
	</div>
	)

ForecastItem.propTypes ={
	weekDay: PropTypes.string,
	hour: PropTypes.number.isRequired,
	data:PropTypes.shape({

		temperature:PropTypes.number.isRequired,
		weatherState:PropTypes.string.isRequired,
		humidity:PropTypes.number.isRequired,
		wind:PropTypes.string.isRequired,
	})
}

export default ForecastItem;