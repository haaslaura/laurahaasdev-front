import { BrowserRouter, Routes, Route } from 'react-router'

import './app.css'

import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'

import Presentation from '../pages/Presentation/Presentation'
import Skills from '../pages/Skills/Skills'
import EducationalBackground from '../pages/EducationalBg/EducationalBg'
import Contact from '../pages/Contact/Contact'
import Portfolio from '../pages/Portolio/Portfolio'
import Error from '../pages/Error/Error'
import Main from '../layouts/Main/Main'
import LegalInformation from '../pages/LegalInformation/LegalInformation'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}>

          <Route index element={<Presentation />} />
          <Route path='/competences' element={<Skills />} />
          <Route path='/formations' element={<EducationalBackground />} />
          <Route path='/realisations' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/informations-legales' element={<LegalInformation />} />
          <Route path='*' element={<Error />} />
        
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
