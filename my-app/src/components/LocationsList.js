import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './style.css'


// const LocationList =({cities}) => (

// 	<div>
// 	<WeatherLocation city={'Santiago,scl'}/>
// 	<WeatherLocation city={'Bogota,col'}/>
// 	<WeatherLocation city={'Buenos Aires,ar'}/>
// 	<WeatherLocation city={'Rio de Janeiro,br'}/>

// 	</div>

// )


const LocationList =({cities, onSelectedLocation}) => {

	const handlerWeatherLocationClick = city  => {
		console.log('handlerWeatherLocationClick', city)
		onSelectedLocation(city)
		
	}

	const srtToComponent = cities => (
	cities.map(city => (<WeatherLocation
	 key={city} 
	 city={city}
	 onWeatherLocationClick = {() =>
	 	handlerWeatherLocationClick(city)
	 }
	 />)) //si yo creo una nueva ciudad la key sera el mismo nombre de la ciudad
);
 return(
 	<div className="locationList">
 		{srtToComponent(cities)}
 
 	</div>)

};

// llamamos la funcion que escribe cada una de las cities dinamicas
LocationList.propTypes ={
	cities: PropTypes.array.isRequired,
}


export default LocationList;
