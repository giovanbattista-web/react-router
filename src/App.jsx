import Homepage from './pages/Homepage';
import ChiSiamo from './pages/ChiSiamo';
import Elenco from './elenco/Elenco';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Detail from './elenco/Detail.jsx';

function App() {

  return (
    <>
      {/* ANDIAMO AD USARE LA COMPONENTE BrowserRouter */}
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Homepage />} />
            <Route path='/chisiamo' element={<ChiSiamo />} />
            <Route path='/elenco'>
              <Route index element={<Elenco />} />
              <Route path=':id' element={<Detail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
