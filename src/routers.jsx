import HomePage from './pages/homepage/HomePage'
import AboutPage from './pages/aboutpage/AboutPage'
import MyWorkspacePage from './pages/myworkspacepage/MyWorkspacePage'
import CertificatePage from './pages/certificatepage/CertificatePage'
import MusicWorksPage from './pages/myworkspacepage/music/MusicworksPage'
import SoftwareWorksPage from './pages/myworkspacepage/software/SoftwareWorksPage'
import DiplomaPage from './pages/diplomapage/DiplomaPage'
import Error404 from './pages/error/Error404'
import HaveWeMetOnVal from './pages/gamepage/valorant/HaveWeMetOnVal'

import { Route } from 'react-router-dom'
import ElliePage from './pages/ellie/ElliePage'

export default function routes() {
    return (
        <>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route
                path='/myworkspace'
                element={<MyWorkspacePage />}
            />
            <Route
                exact
                path='/myworkspace/music'
                element={<MusicWorksPage />}
            />
            <Route
                exact
                path='/myworkspace/software'
                element={<SoftwareWorksPage />}
            />
            <Route
                exact
                path='/certificates'
                element={<CertificatePage />}
            />
            <Route
                exact
                path='/diplomas'
                element={<DiplomaPage />}
            />
            <Route
                exact
                path='/games/valorant/have-we-met-on-val'
                element={<HaveWeMetOnVal />}
            />
            <Route path='*' element={<Error404 />} />

            <Route exact path='/ellie' element={<ElliePage />} />
        </>
    )
}