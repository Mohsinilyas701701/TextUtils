import React from 'react';
import About from './components/About';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import Home from './components/Pages/Home';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
