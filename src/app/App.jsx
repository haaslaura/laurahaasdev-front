import { BrowserRouter, Routes, Route } from 'react-router'

import './app.css'

import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'

import Home from '../pages/Home/Home'
import LegalInformation from '../pages/LegalInformation/LegalInformation'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/mentions-legales' element={<LegalInformation />}/>
        <Route path='*' element={<Error />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
