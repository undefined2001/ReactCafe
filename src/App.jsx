import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/Reactcafe/' element={<Home />} />
        <Route path='/Reactcafe/menu' element={<Menu />} />
        <Route path='/Reactcafe/about' element={<About />} />
        <Route path='/Reactcafe/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;
