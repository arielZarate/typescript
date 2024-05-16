import React from 'react'


import { User } from '../interfaces/User'



interface CardProps {
    user: User;
}

const Card:React.FC<CardProps>=({user})=> {
  return (
    <div style={{ display: 'flex', flexDirection: 'row',  backgroundColor: 'gray', borderRadius: "10px"  ,paddingInline:'8px' ,margin:'10px'}}>
       
              <h2 >{user.name}</h2>

              <h2>{user.lastName}</h2>
        
    </div>
  )
}

export default Card
