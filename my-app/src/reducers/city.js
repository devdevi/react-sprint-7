
import {SET_CITY} from './../actions';

export const city = (state, action)=>{
 //recibe dos parametos state y action
 // 
 switch(action.type){
 	case SET_CITY:
 		return{ ...state, city:action.value}
 	default:
 		

 }
 return state;
	
}
//funcion pura recibe parametros y hace algo con esos parametros


// CUando cambia al state a la city  dale el valor
/*// ... sprit operation llama a 
todo lo que tenga state  trae toda
 las propiedades de state
 Reconoce el valor y traee de donde el lo tiene*/