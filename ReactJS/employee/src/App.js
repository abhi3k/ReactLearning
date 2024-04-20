import React from 'react'
import NavComp from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <NavComp/>
      <Routes>
        <Route path='/' element={<></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
