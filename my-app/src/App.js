import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationsList';


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

	 handlerSelectionClick = city =>{
		console.log('handlerSelectionClick')
	}
  render() {
    return (
		<MuiThemeProvider>
		<div className="App">
		<LocationList cities = {cities}
		onSelectedLocation = {this.handlerSelectionClick} />

		</div>
		</MuiThemeProvider>
    );
  }
}

export default App;
