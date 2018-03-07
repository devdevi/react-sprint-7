import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationsList';
import ForecastExtended from './components/ForecastExtendend';
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

	constructor(){
		super()
		this.state = {
			city: null,
		}
	}

	 handlerSelectionClick = (city) =>{
	 	this.setState({city})
		console.log('handlerSelectionClick', city)
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
				<div className="detail">
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

export default App;
