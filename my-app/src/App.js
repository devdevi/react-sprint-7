import React, {Component} from 'react';
/*import {connect} from 'react-redux'; lo enviamos al container de LOcationLIstCOntainer*/
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import {createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
/*import LocationList from './components/LocationsList'; lo enviamos al container de LOcationLIstCOntainer */
/*import ForecastExtended from './components/ForecastExtendend';*/
// import {setCity} from './actions'; ya no lo usamos aqui 
import ForecastExtendedContainer from './containers/ForecastExtendendContainer';
import LocationsListContainer from './containers/LocationsListContainer';

// import {store} from './store';
import './App.css';

const cities = [
'Santiago,scl',
'Bogota,col',
'Buenos Aires,ar',
'Ciudad de México,mx',
'Madrid,es',
'Rio de Janeiro,br',
'London,uk'
];


class App extends Component {

  render() {
    return (
		<MuiThemeProvider>
		<Grid>
			<Row>
			<Col xs={12}>
			<AppBar title='Weather-Location'/>
			</Col>
			</Row>
			<Row>
				<Col xs={12} md={6}>
				<LocationsListContainer cities = {cities}/>
				</Col>
				<Col xs={12} md={6}>
				<Paper zDepth = {4}>
				<div className="locationList">
					<ForecastExtendedContainer >
					</ForecastExtendedContainer>
				</div>
				</Paper>
				</Col>
			</Row>
			</Grid>
		</MuiThemeProvider>
    );
  }
}

export  default App;


//Redux llevamos las funciones y metodos a las carpetas actions y store 
//hacer una constate store de reduce con un reducer dentro, 
// const store = createStore(() => {})

// 2 Lo vinculamos con el browserr, copy and paste
/*const store = createStore(() => {},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
*/
/*const setCity = value => ({
	type:'setCity',
	value
})*/


// class App extends Component {

// /*	constructor(){
// 		super()
// 		this.state = {
// 			city: null,
// 		}
// 	}*/

//   render() {
//   	/*const {city } = this.state;*/
//     return (
// 		<MuiThemeProvider>
// 		<Grid>
// 			<Row>
// 			<Col xs={12}>
// 			<AppBar title='Weather-Location'/>
// 			</Col>
// 			</Row>
// 			<Row>
// 				<Col xs={12} md={6}>
// 				<LocationsListContainer cities = {cities}/>
// 				</Col>
// 				<Col xs={12} md={6}>
// 				<Paper zDepth = {4}>
// 				<div className="locationList">
// 					<ForecastExtendedContainer>
// 					</ForecastExtendedContainer>
// 				</div>
// 				</Paper>
// 				</Col>
// 			</Row>
// 			</Grid>
			

// 		</MuiThemeProvider>
//     );
//   }
// }
// // const mapDispatchPropsActions = () => {};
// //reduz esta esperando parametros si o si toca hacerlo
// /*const componentConnected = connect(null, mapDispatchPropsActions)(App) 
// */

// 	{
// 				city === null ? null : 
// 					<ForecastExtendedContainer city = {city}/>
// 				}


// 				(
// 				this.props.city && 
// 				<ForecastExtended city = {this.props.city} />
// 		)

// //Valodamos app, antes de cambiar el nombre;

// /*
// App.propTypes ={
// 	setCity:PropTypes.func.isRequired, Validamos pero ya no lo usamos }
// */	

// /*dispatch: SOlicita el cambio al estado, 
//  permite que el estado sea actualizado
//   a través del un action o función, que 
//   tiene una llave type, y los valores que 
//   quisiéramos  agregar*/
// /*const mapDispatchPropsActions = dispatch => ({

// 	setCity: value => dispatch(setCity(value))
// }); lo enviamos al container de LOcationLIstCOntainer */
// //duvuelve un objeto y le pasa el estado a redux 


// /* Esto lo haciamos antes asi LUnes !!!
// const AppConnected = connect(null, mapDispatchPropsActions)(App) 



// // conecta react con reduce
// export  default AppConnected;*/

// export  default App



// /*redux se usa atravez de container, los cantaines van a tener los estados de nuestra aplicacion,.
// redux maneje el cambio de estado 
// */