import {createBrowserRouter, RouterProvider,Route, createRoutesFromElements} from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx';
import Education from './components/Education.jsx';
import About, { Aboutdata } from './components/About.jsx';
import User from './components/User.jsx';
//option1 - Object-Based Data Router (BEST for Production)
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    loader:Aboutdata,
    children:[
  {
    path:"",
    element:<Home/>
  },
  {
    path:"/Education",
    element:<Education/>
  },
  {
    loader:Aboutdata,
    path:"/About",
    element:<About/>
  },
  {
    path:"/user/:id",
    element:<User/>
  },
  {
    path: '*',
  element: <h1>404 Not Found</h1>
  }
    ]
  }
])

// JSX-based Data Router Configuration
  /* const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/about' element={<About/>}/>
    </Route>
    )
  ) */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
