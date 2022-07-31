
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/pages/HomePage'
import MyWorkspacePage from './components/pages/MyWorkspacePage'
import Error404 from './components/pages/Error404'
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
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/myworkspace' element={<MyWorkspacePage />} />
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