import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import {createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationsList';
import ForecastExtended from './components/ForecastExtendend';
import {setCity} from './actions';
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


class App extends Component {

	constructor(){
		super()
		this.state = {
			city: null,
		}
	}

	 handlerSelectionClick = (city) =>{
	 	this.setState({city})
		console.log('handlerSelectionClick', city)

		// const action = {type:'setState', value:city} Las acction no tienen quje estar dentro del componenete
		// store.dispatch(setCity(city)) yo ya no estoy importando store
		this.props.setCity(city);
	}
  render() {

  	const {city } = this.state;
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
				<LocationList cities = {cities}
				onSelectedLocation = {this.handlerSelectionClick} />
				</Col>
				<Col xs={12} md={6}>
				<Paper zDepth = {4}>
				<div className="locationList">
				{
					city === null ? null : 
					<ForecastExtended city = {city}> </ForecastExtended>
				}
				</div>
				</Paper>
				</Col>
			</Row>
			</Grid>
			

		</MuiThemeProvider>
    );
  }
}
// const mapDispatchPropsActions = () => {};
//reduz esta esperando parametros si o si toca hacerlo
/*const componentConnected = connect(null, mapDispatchPropsActions)(App) 
*/
const mapDispatchPropsActions = dispatch => ({

	setCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, mapDispatchPropsActions)(App) 


export  default AppConnected;



