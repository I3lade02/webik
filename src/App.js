import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './Components/Projects';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
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