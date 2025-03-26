import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';

const App = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <main className='min-h-screen p-6'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
          <Projects />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;