import {createStore } from 'redux';
import {city} from './../reducers/city'

const initialState = {
	city: 'Buenos Aires,ar'

}
/*const reducer = (state, action)=>{ //recibe dos parametos state y action
	return state;
}
*/
export const store = createStore(city, initialState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
/*export const store = createStore(() => {},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );*/
/*{} esta llave representa los reducer de redux*/
/*Store:Objeto que mantiene estado compartido para toda la app y 
almacena el estado dentro de un objeto js, podemos acceder a él 
desde cualquier parte de la aplicación, Mantiene el estado de la aplicacion de forma centralizada,*/
