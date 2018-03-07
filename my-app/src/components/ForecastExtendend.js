import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem'

const days = [
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes',
	'Sabado',
	'Domingo'
];




class ForecastExtended extends Component { 
	renderForecastItemDays(){
		return days.map(day =>(
		 	<ForecastItem weekDay = {day}  key={day} ></ForecastItem>
		 	))
	}




	render(){
		const { city } = this.props;
		return(
			<div><h2>Pronostico extendido para {city}
			</h2>
			{this.renderForecastItemDays()}
			</div>
		)}

}

ForecastExtended.propTypes ={
	city: PropTypes.string.isRequired,
}


export default ForecastExtended;
