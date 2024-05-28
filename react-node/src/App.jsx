import { Route, BrowserRouter, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import Edit from './pages/edit'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
