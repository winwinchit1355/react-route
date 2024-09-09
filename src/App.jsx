import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Nav from './components/utils/Nav';
import './App.css';

export default function App() {
  return (
    <div>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About  />} />
        </Routes>
    </div>
  )
}
