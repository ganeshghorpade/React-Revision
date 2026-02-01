/* In React, setState is asynchronous and batched.
When we call setCount(count + 1) multiple times in the same render cycle, 
all calls use the same stale count value, so the state increases only once. 
- so first time prv value is 0 we already set seen useState(0);
 so first time 0 + 1 = 1

*/

import './App.css'
import { useState } from 'react'

function App() {
const [count,SetCount] =useState(0);

function countInc (){
  //SetCount(count+1);
  SetCount((prv)=>prv +1);
}

function countDec(){
  if(count>0){
    SetCount((prv)=>prv-1);
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
