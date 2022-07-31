
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import MyWorkspacePage from './components/MyWorkspacePage'
import Error from './components/Error'
import Header from './components/Header'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/myworkspace' element={<MyWorkspacePage />} />
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </div>

  )
}

export default App