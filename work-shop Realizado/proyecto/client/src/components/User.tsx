

import React,{useState,useEffect} from 'react'

import { RootState } from '../redux/store';
import { useDispatch,useSelector } from 'react-redux'
import { fetchUsersThunks } from '../redux/thunks/thunkUser';
import { AppDispatch } from '../redux/store';
import { Link } from 'react-router-dom';
import Card from './Card';


function User() {

const dispatch:AppDispatch=useDispatch();
const users=useSelector((state:RootState)=>state.userReducer.users)



//===useEfecct para cargar los users al componente========

useEffect(()=>{
 dispatch(fetchUsersThunks())
},[dispatch])



  return (

    <div style={{ display: 'flex', flexDirection:'column', margin:'40px' }} >
        
        <Link  to='/form' style={{textAlign:'center'  }}>
        <button style={{border:'2px solid yellow' ,padding:'15px' ,borderRadius:'10px'}}>Agregar Usuario</button>
        </Link>

      <div style={{ display: 'flex', flexDirection:'column',justifyContent: 'center', alignItems: 'center' }}>

        <h1 style={{ textAlign: 'center', margin: '30px' , color:'#F00203'}}>User List</h1>
        {users.map((user) => (
          <div key={user.id}>
            <Card user={user}/>
          </div>
        ))}
        </div>
       
    </div>
  )
}

export default User
