//import React, { useState } from 'react'
import { useContext } from 'react';
import UserContext from '../context/usercontext';
function Profile() {

    //const[value,setValue]=useState("");

    const {data} = useContext(UserContext);
  
   if(!data.uname){
    return <div>data not found</div>
   }
    return <div>username : {data.uname}</div>
  
}

export default Profile;