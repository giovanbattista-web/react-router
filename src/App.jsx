import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './links/Homepage';
import ChiSiamo from './links/ChiSiamo';
import Elenco from './links/Elenco';

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
