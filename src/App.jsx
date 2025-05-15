import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './links/Homepage';

function App() {

  return (
    <>
      {/* ANDIAMO AD USARE LA COMPONENTE BrowserRouter */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Homepage}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
