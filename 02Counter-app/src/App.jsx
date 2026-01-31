import './App.css'
import { useState } from 'react'

function App() {
const [count,SetCount] =useState(0);

function countInc (){
  SetCount(count+1);
}

function countDec(){
  if(count>0){
    SetCount(count-1);
  }
}


  return (
    <>
      <h1>Counter app</h1>
      <h1 className='count'>{count}</h1>
      <button onClick={countInc} >Inc</button>
      <button onClick={countDec}>Dec</button>
    </>
  )
}

export default App
