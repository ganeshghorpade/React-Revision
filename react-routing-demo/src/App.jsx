import './App.css'
import Navbar from './components/Header/Navbar'
import Home from './components/Home'
import Education from './components/Education'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer/Footer'
import {Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState({});

 const GetInfo = async ()=>{
 try {
   const resp =  await fetch("https://api.github.com/users/ganeshghorpade");
  const data = await resp.json();
  setData(data);
 } catch (error) {
    console.log(error);
    
 }
 }
 useEffect(()=>{
  GetInfo();
 },[])

  return (
    <>
    <Navbar data ={data}/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/About'  element={<About data ={data}/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
