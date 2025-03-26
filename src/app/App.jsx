import { BrowserRouter, Routes, Route } from 'react-router'
import { useEffect, useState } from 'react'

import './app.css'

import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'

import Error from '../pages/Error/Error'
import Home from '../pages/Home/Home'
import LegalInformation from '../pages/LegalInformation/LegalInformation'
import Project from '../pages/Project/Project'


function App() {

  const [isValidRoute, setIsValidRoute] = useState(true);

    useEffect(() => {
        const validRoutes = ['/', '/mentions-legales'];
        setIsValidRoute(validRoutes.includes(window.location.pathname));
    }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* {isValidRoute ? () : () } */}

        <Route path='/' element={<Home />} />
        <Route path='/projet/:id' element={<Project />} />
        <Route path='/mentions-legales' element={<LegalInformation />}/>
        <Route path='*' element={<Error />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
