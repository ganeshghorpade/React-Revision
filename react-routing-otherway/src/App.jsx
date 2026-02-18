import './App.css'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import { useLoaderData } from 'react-router-dom';
import {Outlet} from 'react-router-dom';
function App() {
  const data = useLoaderData();

  return (
    <>
      <Navbar data={data}/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
