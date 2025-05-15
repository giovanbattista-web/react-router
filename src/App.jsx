import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ChiSiamo from './pages/ChiSiamo';
import Elenco from './pages/Elenco';

function App() {

  return (
    <>
      {/* ANDIAMO AD USARE LA COMPONENTE BrowserRouter */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/chisiamo' element={<ChiSiamo />} />
          <Route path='/elenco' element={<Elenco />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
