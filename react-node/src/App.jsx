import { Route, BrowserRouter, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import Edit from './pages/edit'
import Signup from './pages/signup'
import Login from './pages/login'
import { ImageUpload } from './pages/imageUpload'
import WebSocket from './pages/webSocket'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/upload' element={<ImageUpload />} />
        <Route path='/socket' element = {<WebSocket />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
