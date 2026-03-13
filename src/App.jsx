import Login from './Components/Login'
import './App.css'
import Dashboard from './Components/Dashboard'
import Signup from './Components/Signup'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
  <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home/signup' element={<Signup />} />
      <Route path='/home/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App