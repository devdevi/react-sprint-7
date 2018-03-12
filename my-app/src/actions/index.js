/*ACTION CREATOR : funciones que retornan un action.
Ventajas: Documentan mejor el código 
evitan tener las cadenas de type ṕor todo 
el codigo por que son reusables, 
facilitan conocer los parámetros que necesita la acción ,
Permite agregar logica adicional.
*/


export const SET_CITY = 'SET_CITY';

export const setCity = value => ({
	type: SET_CITY,
	value
})

/*action, Funciones que retornan un action,
Action: Objetos que se le pasan al metodo Dispatch del store 
generalmente se usa la llave type para definir la accion que 
se quiere realizar,
las otras llaves son parámetros o argumentos utilizados
 para ejecutar el cambio 
describen el cambio que se quiere hacer, */
