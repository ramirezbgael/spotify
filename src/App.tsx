import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Profile from './components/profile/Profile'
import Podcasts from './components/podcasts/Podcasts'
import Library from './components/library/Library'
import Home from './components/home/Home'
import Playbar from './components/playbar/Playbar'
import Spotify from '../public/spotify-logo.png'
import Artist from './components/artist/Artist'

const App = () => {


  return (
    <Router>
      <div className='App'>
        <nav className='nav'>
          <div className="logo">
            <img src={Spotify} alt="" />
          </div>
          <form className='form' action="">
            <input placeholder='Search' type="text" className="input" />
            <button className='form-button'><i className='bx bx-search' ></i></button>
          </form>
          <ul>
            <p>MENU</p>
            <li>
              <Link to='/home'>
                <p><i className='bx bxs-home'></i>Home</p>
              </Link>
            </li>
            <li>
              <Link to='/library'>
                <p><i className='bx bxs-carousel'></i>Library</p>
              </Link>
            </li>
            <li>
              <Link to='/podcasts'>
                <p><i className='bx bxs-microphone'></i>Podcasts</p>
              </Link>
            </li>
            <li>
              <Link to='/profile'>
                <p><i className='bx bxs-user'></i>Profile</p>
              </Link>
            </li>
          </ul>
          <ul className='playlist'>
            <p>PLAYLISTS</p>
            <li>
              <Link to='/playlists/working'>
                <p><i className='bx bxs-playlist'></i>Working</p>
              </Link>
            </li>
            <li>
              <Link to='/playlists/training'>
                <p><i className='bx bxs-playlist'></i>Training</p>
              </Link>
            </li>
            <li>
              <Link to='/playlists/gaming'>
                <p><i className='bx bxs-playlist'></i>Gaming</p>
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <div className='router'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/library' element={<Library />} />
              <Route path='/podcasts' element={<Podcasts />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/artist' element={<Artist/>} />
              <Route path='/playlists/working' element={<Profile />} />
              <Route path='/playlists/training' element={<Profile />} />
              <Route path='/playlists/gaming' element={<Profile />} />
            </Routes>
          </div>
          <div className="playbar">
            <Playbar />
          </div>
        </main>
      </div>
      {/*Definitivamente debe ser una divsion, una nav bar de aproxi-
      madamente 15vh y contenido del resto, el Router intercambia los
      distintos componentes en el área de contenido. */}

    </Router>
  )
}

export default App