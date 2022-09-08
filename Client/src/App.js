import './App.css';

import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Signupform from './Components/Signupform';
import Mobile from './Components/Mobile';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

      <Router>
        <Navigation />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signupform" element={<Signupform />} />
          <Route path="/Mobile" element={<Mobile/>} />
        </Routes>
        <Footer/>
      </Router>
     
    </div>
  
  
  
  
  );


}

export default App;
