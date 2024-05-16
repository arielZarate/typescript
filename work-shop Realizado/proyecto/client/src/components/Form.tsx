import React ,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { AddUserThunks } from '../redux/thunks/thunkUser'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
function Form() {

  const [user,setUser]=useState({
    name:'',
    lastName:''
  })

  const dispatch:AppDispatch=useDispatch();
  const navigate=useNavigate();

const handlerForm=()=>{

  dispatch(AddUserThunks(user))

  // Esperar 2 segundos antes de redirigir
  setTimeout(() => {
    navigate('/');
  }, 2000);
}

  const handlerSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   await handlerForm();
  

  }

  const handlerChange = (e: any) => {
    const {name,value}=e.target;
  setUser(
   {
      ...user,
       [name]:value
      })

    //console.log(name, ":", value)

  }

  return (
    <form 
    style={{display:'flex', flexDirection:'column',  maxHeight:'100vh'  , margin:'4rem' ,gap:'1rem', backgroundColor:'#1d201d' , padding:'2rem' ,borderRadius:'10px'}}
    
    onSubmit={handlerSubmit}
    >
      
      <h1 style={{color:'whitesmoke'}}>Form User</h1>
      <input type="text" placeholder='name'  name='name'  style={{ border:'2px solid #2ec442' ,borderRadius:'5px' , padding:'4px'}}
      onChange={handlerChange}
      />
      <input type="text" placeholder='lastName'  name='lastName'style={{ border: '2px solid #2ec442', borderRadius: '5px', padding: '4px' }} 
        onChange={handlerChange}
      />

   <div style={{display:'flex', flexDirection:'row' ,justifyContent:'space-between'}}>
        <button type='submit' style={{ borderRadius: '5px', padding: '4px', backgroundColor: '#F43534', color: "white" }} >
          Add user
        </button>

        <Link to='/'>
          <button style={{ borderRadius: '5px', padding: '4px', backgroundColor: '#c5c21d', color: "white" }} >
            back
          </button>

        </Link>

   </div>
    </form>
  )
}

export default Form
