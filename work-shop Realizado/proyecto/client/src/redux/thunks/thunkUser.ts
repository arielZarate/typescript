import axios from 'axios'
//import { Dispatch } from '@reduxjs/toolkit';
import { fetchUser ,addUser} from '../feactures/slicesUser';
import { AppDispatch } from '../store';
// Thunk para obtener usuarios de la API
export const fetchUsersThunks = () => async (dispatch:AppDispatch) => {
    try {
        const response = await fetch('http://localhost:3001/api/user/');
        const data=await response.json();
        //console.log(data)
        dispatch(fetchUser(data));
        return data;
    } catch (error) {
        // Manejar errores si es necesario
        console.error('Error fetching users:', error);
        throw error; // Lanza el error para que pueda ser manejado por el código que llama al thunk
    }
};



export const AddUserThunks= (data:any)=>{
return async (dispatch:AppDispatch)=>{
try {
  const response = await axios.post('http://localhost:3001/api/user/',data );
    
   // console.log(response.data)
    dispatch(addUser(data));
    return data;
} catch (error) {
    // Manejar errores si es necesario
    console.error('Error fetching users:', error);
    throw error; // Lanza el error para que pueda ser manejado por el código que llama al thunk
}
}
}