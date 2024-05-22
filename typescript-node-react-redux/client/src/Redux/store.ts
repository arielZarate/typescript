import { configureStore, combineReducers } from "@reduxjs/toolkit";

import CounterSlices from "./feactures/counter/CounterSlices";
import UserSlices from "./feactures/user/UserSlices";
//combineReducers se utiliza para combinar múltiples reducers en un solo reducer raíz.
const rootReducer = combineReducers({
  counterSlices: CounterSlices, //es otra forma de hacerlo con el Slices
  UserSlices: UserSlices,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

/*

RootState se define utilizando ReturnType<typeof rootReducer>, 
lo que significa que es el tipo del valor de retorno de rootReducer. 
En otras palabras, RootState representa el tipo del estado completo de la aplicación.

*/

export type RootState = ReturnType<typeof store.getState>;

/*

La línea export type AppDispatch = typeof store.dispatch; en tu configuración 
de Redux Toolkit tiene un propósito específico en TypeScript:
 define un tipo para el despachador (dispatcher) de tu store, 
 AppDispatch, basado en el tipo de dispatch que tu store de Redux usa. 
 Esto te ayuda a asegurarte de que cuando uses el despachador en tu aplicación, 
 TypeScript pueda verificar que las acciones que estás despachando sean válidas 
 según tu configuración de Redux.
*/
export type AppDispatch = typeof store.dispatch;
