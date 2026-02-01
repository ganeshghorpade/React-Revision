import './App.css'
import Card from './components/Card'
function App() { 

  // we also directly pass the obj in card , and when access in component obj.username  
  //
const obj = {
  username : "tokyo",
  age:21,
  location:"uk"
}
  return (
    <>
      <Card username={obj}/>
    </>
  )
}

export default App
