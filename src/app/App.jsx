import { BrowserRouter, Routes, Route } from 'react-router'

import './app.css'

import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'

import Presentation from '../pages/Presentation/Presentation'
import Skills from '../pages/Skills/Skills'
import EducationalBackground from '../pages/EducationalBg/EducationalBg'
import Contact from '../pages/Contact/Contact'
import Portfolio from '../pages/Portolio/Portfolio'
import { useEffect } from 'react'


function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Presentation />} />
        <Route path='/competences' element={<Skills />} />
        <Route path='/formations' element={<EducationalBackground />} />
        <Route path='/realisations' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
