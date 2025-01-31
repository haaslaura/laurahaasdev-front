import { BrowserRouter, Routes, Route } from 'react-router'

import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'

import Presentation from '../pages/Presentation/Presentation'

import './app.css'

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path='/' element={<Presentation />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
