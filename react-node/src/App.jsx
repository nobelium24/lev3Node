import { Route, BrowserRouter, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import Edit from './pages/edit'
import Signup from './pages/signup'
import Login from './pages/login'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
