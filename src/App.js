import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './pages/homepage/HomePage'
import AboutPage from './pages/aboutpage/AboutPage'
import MyWorkspacePage from './pages/myworkspacepage/MyWorkspacePage'
import CertificatePage from './pages/certificatepage/CertificatePage'
import DiplomaPage from './pages/diplomapage/DiplomaPage'
import Error404 from './pages/error/Error404'
import Header from './components/Header'
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import {BrowserView} from 'react-device-detect'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage canScroll={false} />} />
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/myworkspace' element={<MyWorkspacePage />} />
          <Route exact path='/certificates' element={<CertificatePage />} />
          <Route exact path='/diplomas' element={<DiplomaPage />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <BrowserView>
          <Footer />
        </BrowserView>
      </Router>
    </div>

  )
}

export default App