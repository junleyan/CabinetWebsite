import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <div className="App-container">

        <Router>
          <div class="top-nav">
            <div class="top-nav-left">Perfect Cabinet</div>
            <div class="top-nav-right">
              <div className="top-nav-items"><Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link></div>
              <div className="top-nav-items"><Link to='/appointment' style={{ color: 'black', textDecoration: 'none' }}>Appointment</Link></div>
              <div className="top-nav-items"><Link to='/gallery' style={{ color: 'black', textDecoration: 'none' }}>Gallery</Link></div>
              <div className="top-nav-items"><Link to='/contact' style={{ color: 'black', textDecoration: 'none' }}>Contact</Link></div>
            </div>
          </div>

          <div className="content-container">
            <Routes>
              <Route path='/appointment' element={<Appointment/>}/>
              <Route path='/gallery' element={<Gallery/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;