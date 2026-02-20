import React, {  useState } from 'react'
import UserContext from '../context/usercontext';
import { useContext } from 'react';

function Datastorage() {

    const [uname,setUame] = useState("");
    const [password,setPassword] = useState("");

    const {setData} = useContext(UserContext);

    const savedata = (e)=>{
    e.preventDefault();
    setData({uname,password})
    setUame("");
    setPassword("");
   }
   
  return (
    <div>
        <form onSubmit={savedata}>
        <div><input type="text" value={uname} onChange={(e)=>setUame(e.target.value)}  placeholder='username' /></div><br />
        <div><input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' /></div><br />
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Datastorage;