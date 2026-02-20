import './App.css'
import UserContextProvider from './context/userContextProvider';
import Datastorage from './components/datastorage';
import Profile from './components/profile';
function App() {
  

  return (
    <UserContextProvider>
       <Datastorage/>
       <Profile/>
    </UserContextProvider>
  )
}

export default App;
