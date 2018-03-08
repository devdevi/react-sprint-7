import React from 'react';
// import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/es'
import transformWeather from './transformWeather';



// esta funcion crea la data que sacamos de la API DANDO LOS datos que necesitamos
const transformForecast = (data) =>(

	data.list.filter( item => (

		moment.unix(item.dt).hour() === 6 ||
		 moment.unix(item.dt).hour() === 12 ||
		  moment.unix(item.dt).hour() === 18 

)).map(item =>({

	weekDay: moment.unix(item.dt).format('ddd'),
	hour: moment.unix(item.dt).hour(),
	data: transformWeather(item)
}))
	)


// siempre importamos nuestra funciona matiene el mismo nombre del archivo
export default transformForecast ;

// kDay = {day}  key={day}  hour = {10} data = {data}